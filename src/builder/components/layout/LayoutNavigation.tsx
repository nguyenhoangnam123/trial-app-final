import * as React from "react";

export const LayoutNavigation = (props: any) => {
  return (
    <div className="row">
      <nav className="navbar navbar-dark bg-primary">{props.children}</nav>
    </div>
  );
};
