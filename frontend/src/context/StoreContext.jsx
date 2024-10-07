import { createContext } from "react";

export const StorContext=createContext(null)
const StorContextProvider=(props)=>{
    const contextValue={
        
    }
    return(
        <StorContext.Provider value={contextValue}>
            {props.children}
        </StorContext.Provider>
    )

}
export default  StorContextProvider;