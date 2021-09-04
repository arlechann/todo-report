import keywords from "./keywords";

class TemplateParseError {
  constructor(message) {
    this.message = message;
    this.name = 'TemplateParseError'
  }
}

const lexText = (template, index, tokens) => {
  if (template[index] === '%') { return lexKeyword(template, index, tokens); }
  for (let i = index + 1; i < template.length; i++) {
    if (template[i] === '%') {
      tokens.push({ type: 'text', text: template.substring(index, i) });
      return lexKeyword(template, i, tokens);
    }
  }
  tokens.push({ type: 'text', text: template.substring(index) });
  return tokens;
};

const lexKeyword = (template, index, tokens) => {
  for (let i = index + 1; i < template.length; i++) {
    if (template[i] === '%') {
      tokens.push({ type: 'keyword', text: template.substring(index, i + 1) });
      return lexText(template, i + 1, tokens);
    }
  }
  throw new TemplateParseError("Unexpected end of template.");
};

const lexer = template => {
  return lexText(template, 0, []);
};

const CONTROL_KEYWORD = {
  LIST_BEGIN: '%LIST_BEGIN%',
  LIST_END: '%LIST_END%',
};

const parseList = (tokens, index, ast) => {
  for (let i = index; i < tokens.length; i++) {
    if (tokens[i].type === 'text') {
      ast.push(tokens[i]);
      continue;
    }
    switch (tokens[i].text) {
      case CONTROL_KEYWORD.LIST_BEGIN:
        throw new TemplateParseError(`Unexpected keyword ${CONTROL_KEYWORD.LIST_BEGIN}`);
      case CONTROL_KEYWORD.LIST_END:
        return [ast, i];
      default:
        ast.push(tokens[i]);
        break;
    }
  }
  throw new TemplateParseError(`Unexpected end of template. "${CONTROL_KEYWORD.LIST_END}" not found.`);
};

const parserImpl = (tokens, index, ast) => {
  for (let i = index; i < tokens.length; i++) {
    if (tokens[i].type === 'text') {
      ast.push(tokens[i]);
      continue;
    }
    switch (tokens[i].text) {
      case CONTROL_KEYWORD.LIST_BEGIN:
        const [listAst, lastIndex] = parseList(tokens, i + 1, []);
        ast.push(listAst);
        i = lastIndex;
        break;
      case CONTROL_KEYWORD.LIST_END:
        throw new TemplateParseError(`Unexpected keyword ${CONTROL_KEYWORD.LIST_END}`);
      default:
        ast.push(tokens[i]);
        break;
    }
  }
  return ast;
};

const parser = tokens => {
  return parserImpl(tokens, 0, []);
};

const convert = (token, state, id, order) => {
  const funcs = Object.fromEntries(keywords.map(pair => [pair.keyword, pair.get]));
  if (funcs.hasOwnProperty(token.text)) {
    return funcs[token.text]({ state, id, order }).toString();
  } else {
    throw new TemplateParseError(`Unknown keyword "${token.text}".`);
  }
}

const buildList = (ast, state) => {
  return state.inProgress.map((id, order) => {
    return ast.map(token => {
      switch (token.type) {
        case 'text':
          return token.text;
        case 'keyword':
          return convert(token, state, id, order);
        default:
          throw new TemplateParseError('Unexpected token type.');
      }
    }).join('');
  }).join('');
}

const buildImpl = (ast, state) => {
  return ast.map(token => {
    if (token instanceof Array) {
      return buildList(token, state);
    }
    switch (token.type) {
      case 'text':
        return token.text;
      case 'keyword':
        return convert(token, state, null, null)
      default:
        throw new TemplateParseError('Unexpected token type.');
    }
  }).join('');
};

const build = (template, state) => {
  try {
    const tokens = lexer(template);
    const ast = parser(tokens);
    const text = buildImpl(ast, state);
    return text;
  } catch (e) {
    if (e instanceof TemplateParseError) {
      return e.message;
    }
    throw e;
  }
};

export { build };