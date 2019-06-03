import * as React from "react";
import "./layout.scss";

export const LayoutDragZone = (props: any) => {
  return <div className="col-md-2 dragzone">{props.children}</div>;
};
