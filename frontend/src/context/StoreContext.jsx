import { createContext } from "react";
import {food_list} from "../assets/assets";
export const StorContext=createContext(null)
const StorContextProvider=(props)=>{
    const contextValue={
        food_list
    }
    return(
        <StorContext.Provider value={contextValue}>
            {props.children}
        </StorContext.Provider>
    )

}
export default  StorContextProvider;