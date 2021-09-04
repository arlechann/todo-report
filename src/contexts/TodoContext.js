import { createContext, useContext, useReducer } from "react";
import { saveLocalStorageMiddleware, loadLocalStorage, resetLocalStorege } from "../utils/localStrage";

const initialState = {
  items: {},
  inProgress: [],
  done: [],
  nextId: 1,
};

const TodoContext = createContext(initialState);
const DispatchTodoContext = createContext(() => { });

export const useTodoContext = () => useContext(TodoContext);
export const useDispatchTodoContext = () => useContext(DispatchTodoContext);

const defaultItem = {
  progress: 0,
  dueDate: '',
  isProductive: false,
  spentTimeMinutes: 0,
  remarks: '',
}

const reducerAdd = (state, payload) => {
  const item = {
    ...defaultItem,
    ...payload.item,
    id: state.nextId,
  };
  return {
    ...state,
    items: {
      ...state.items,
      [item.id]: item,
    },
    inProgress: [
      ...state.inProgress,
      item.id,
    ],
    nextId: state.nextId + 1,
  };
};

const arraySwap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

const reducerUp = (state, payload) => {
  const index = payload.index;
  if (index - 1 < 0 || state.inProgress.length <= index) {
    return state;
  }
  return {
    ...state,
    inProgress: arraySwap([...state.inProgress], index - 1, index)
  };
};

const reducerDown = (state, payload) => {
  const index = payload.index;
  if (index < 0 || state.inProgress.length <= index + 1) {
    return state;
  }
  return {
    ...state,
    inProgress: arraySwap([...state.inProgress], index, index + 1)
  };
};

const reducerDone = (state, payload) => {
  const id = payload.id;
  return {
    ...state,
    inProgress: state.inProgress.filter(e => e !== id),
    done: [
      ...state.done,
      id,
    ],
  };
};

const reducerUpdateItem = property => {
  return (state, payload) => {
    const id = payload.id;
    const value = payload[property];
    return {
      ...state,
      items: {
        ...state.items,
        [id]: {
          ...state.items[id],
          [property]: value,
        },
      },
    };
  };
};

const reducerUpdateProgress = reducerUpdateItem('progress');
const reducerUpdateRemarks = reducerUpdateItem('remarks');
const reducerUpdateSpentTimeMinutes = reducerUpdateItem('spentTimeMinutes');

const reducerRestore = (state, payload) => {
  const id = payload.id;
  return {
    ...state,
    inProgress: [
      ...state.inProgress,
      id
    ],
    done: state.done.filter(e => e !== id),
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return reducerAdd(state, action.payload);

    case 'up':
      return reducerUp(state, action.payload);

    case 'down':
      return reducerDown(state, action.payload);

    case 'done':
      return reducerDone(state, action.payload);

    case 'update progress':
      return reducerUpdateProgress(state, action.payload);

    case 'update remarks':
      return reducerUpdateRemarks(state, action.payload);

    case 'update spent time':
      return reducerUpdateSpentTimeMinutes(state, action.payload);

    case 'restore':
      return reducerRestore(state, action.payload);

    case 'all clear':
      resetLocalStorege(localStorageKey);
      return initialState;

    default:
      return state;
  }
};

const compose = (f, ...fs) => {
  return (...args) => fs.reduce((acc, fn) => fn(acc), f(...args));
};

const localStorageKey = 'TodoContext';

export const TodoContextProvider = props => {
  const [state, dispatch] = useReducer(
    compose(reducer, saveLocalStorageMiddleware(localStorageKey)),
    props.initialState ?? initialState,
    loadLocalStorage(localStorageKey)
  );

  return (
    <TodoContext.Provider value={state}>
      <DispatchTodoContext.Provider value={dispatch}>
        {props.children}
      </DispatchTodoContext.Provider>
    </TodoContext.Provider>
  )
}
