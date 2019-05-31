import * as React from "react";
import { IGridComponent, IGridItemComponent } from "../../interfaces";

export const GridComponent = ({ children }: IGridComponent) => (
  <div className="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">{children}</div>
  </div>
);
