import GlobalProvider from "./context/GlobalProvider";
import Router from "./shared/Router";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </>
  );
};

export default App;
