import { createContext } from "react";

// Context API 로 전역 상태와 Supabase 관리를 함께 처리한다.
export const GlobalContext = createContext(null);

const GlobalProvider = ({children}) => {

    return (
        <>
        <GlobalContext.Provider
        value={{}}>
            {children}
        </GlobalContext.Provider>
        </>
    )
}


export default GlobalProvider;

