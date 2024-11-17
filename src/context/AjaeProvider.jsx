import { createContext } from "react";

export const AjaeContext = createContext(null);

const AjaeProvider = ({children}) => {

    return (
        <>
        <AjaeContext.Provider
        value={{}}>
            {children}
        </AjaeContext.Provider>
        </>
    )
}


export default AjaeProvider;

