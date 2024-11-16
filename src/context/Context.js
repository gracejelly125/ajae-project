import { createContext } from "react";

export const TestContext = createContext(null);

export default function TestProvider({children}) {

    return (
        <>
        <TestContext>
            {children}
        </TestContext>
        </>
    )
}