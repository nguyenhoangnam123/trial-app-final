import * as React from "react";
import { render } from "react-dom";
import { Provider, Subscribe } from "unstated-x";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContentContainer from "./builder/containers/ContentContainer";
import "@material/layout-grid/mdc-layout-grid.scss";
import { Preview, LayoutBuilder } from "./builder";

render(
  <Provider>
    <Router>
      <Subscribe to={[ContentContainer]}>
        {() => {
          return (
            <>
              <Route path="/" exact component={LayoutBuilder} />
              <Route path="/preview" exact component={Preview} />
            </>
          );
        }}
      </Subscribe>
    </Router>
  </Provider>,
  document.getElementById("root")
);
