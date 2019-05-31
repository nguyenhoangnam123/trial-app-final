import * as React from "react";
import { IGridItemComponent } from "../../interfaces";

export function getMatGridSizeClass(size: number): string {
  return `mdc-layout-grid__cell mdc-layout-grid__cell--span-${size}`;
}

export const GridItemComponent = ({
  size,
  children,
  cssClass = ""
}: IGridItemComponent) => (
  <div
    className={`${getMatGridSizeClass(size)}${
      cssClass !== "" ? ` ${cssClass}` : ""
    }`}
  >
    {children}
  </div>
);
