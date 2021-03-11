import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ReposPageComponent = React.lazy(() => import("./pages/Repos/ReposPage"));
// const ReposDetailsComponent = React.lazy(() =>
//   import("./pages/PropertyDetailsPage/PropertyDetailsPage")
// );

class App extends React.Component {
  render() {
    // {renderRoutes(Routes)}
    return (
      <Suspense fallback={<div>...loading</div>}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={ReposPageComponent} />
            <Route path="/:slug" exact={true} component={ReposPageComponent} />
            <Route
              path="*"
              render={() => {
                // <div>
                //   404<div>Not Found</div>
                // </div>;
              }}
            />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default App;
