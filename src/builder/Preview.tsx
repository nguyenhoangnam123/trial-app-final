import * as React from "react";
import { Subscribe } from "unstated-x";
import contentContainer from "./containers/ContentContainer";

export const Preview = () => {
  return (
    <Subscribe to={[contentContainer]}>
      {() => {
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: contentContainer.state.selected
            }}
          />
        );
      }}
    </Subscribe>
  );
};
