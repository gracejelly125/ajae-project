import AjaeContextProvider from "./context/AjaeProvider";
import Router from "./shared/Router";

const App = () => {
  return (
    <>
      <AjaeContextProvider>
        <Router />
      </AjaeContextProvider>
    </>
  );
};

export default App;
