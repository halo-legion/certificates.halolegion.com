import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Home, Certificate } from "./pages/exports";
import Loading from "./components/Loading/Loading";


export default function App() {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/certificate" component={Certificate} />
            <Route exact path="/" component={Home} />
            <Route path="*">404 - Requested URL not found</Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}
