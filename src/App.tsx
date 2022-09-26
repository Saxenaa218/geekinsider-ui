import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

// import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import "./App.scss";

const Directions = lazy(() => import("./routes"));

const App: () => JSX.Element = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loader--global">
            <Loader />
          </div>
        }
      >
        <Provider store={store}>
          <BrowserRouter>
            <Directions />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
};

export default App;
