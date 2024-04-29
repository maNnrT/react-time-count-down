import { useReducer } from "react";
import Context from "./Context";
import reducer,{initStates} from "./reducer";
import logger from "./logger";
function Provider({children}){
    const [state, dispatch] = useReducer(logger(reducer), initStates);
    return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    );
}
export default Provider