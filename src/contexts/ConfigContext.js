import { createContext, useContext, useReducer } from "react";
import { saveLocalStorageMiddleware, loadLocalStorage, resetLocalStorege } from "../utils/localStrage";

const initialState = {
  template: '',
};

const ConfigContext = createContext(initialState);
const DispatchConfigContext = createContext(() => { });

export const useConfigContext = () => useContext(ConfigContext);
export const useDispatchConfigContext = () => useContext(DispatchConfigContext);

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.payload;

    case 'reset':
      resetLocalStorege(localStorageKey);
      return initialState;

    default:
      return state;
  }
};

const compose = (f, ...fs) => {
  return (...args) => fs.reduce((acc, fn) => fn(acc), f(...args));
};

const localStorageKey = 'ConfigContext';

export const ConfigContextProvider = props => {
  const [state, dispatch] = useReducer(
    compose(reducer, saveLocalStorageMiddleware(localStorageKey)),
    props.initialState ?? initialState,
    loadLocalStorage(localStorageKey)
  );

  return (
    <ConfigContext.Provider value={state}>
      <DispatchConfigContext.Provider value={dispatch}>
        {props.children}
      </DispatchConfigContext.Provider>
    </ConfigContext.Provider>
  )
}
