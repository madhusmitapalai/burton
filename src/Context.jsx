import { createContext,useReducer } from 'react';
//import '../src/components/banner.css'
export const ThemeContext=createContext();
  const INITIAL_STATE={darkmode:false}
  const themeReducer=(state,action)=>{
      switch(action.type){
          case "toggle":
          return{darkmode:!state.darkmode};
          default:
              return state;
      }
  }
   export  const ThemeProducer=(props)=>{
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}