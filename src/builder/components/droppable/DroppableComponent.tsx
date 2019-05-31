import * as React from "react";
import "./droppable-component.scss";
import { IDroppableComponent } from "../../interfaces";

export const DroppableComponent = ({
  name,
  onDragOver,
  onDrop,
  children
}: IDroppableComponent) => (
  <div
    className="droppable-component"
    onDragOver={(ev: React.DragEvent<HTMLDivElement>) => onDragOver(ev)}
    onDrop={(ev: React.DragEvent<HTMLDivElement>) => onDrop(ev, name)}
    data-id={name}
  >
    <span>Drop components here!</span>
    {children}
  </div>
);
