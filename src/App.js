import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Alert from "./components/alert/alert.component";
import Spinner from "./components/spinner/spinner.component";
import NotFound from "./components/notfound/notfound.component";

const HomePage = lazy(() => import("./pages/home_page/home_page.component"));
const ReadArticlePage = lazy(() =>
  import("./pages/read_article_page/read_article_page.component")
);
const CreateOrEditPage = lazy(() =>
  import("./pages/create_or_edit_page/create_or_edit_page.component")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/readArticle/:id" component={ReadArticlePage} />
            <Route exact path="/createArticle" component={CreateOrEditPage} />
            <Route exact path="/editArticle/:id" component={CreateOrEditPage} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
