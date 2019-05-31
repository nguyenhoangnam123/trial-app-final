import * as React from "react";
import { DraggableComponent } from "../";
import { IComponent, IComponentType } from "../../interfaces";
import { ContentBuilderGridComponent } from "./";
import { IContentBuilderDraggableComponent } from "../../interfaces";

export const ContentBuilderDraggableComponent = ({
  id,
  name,
  type,
  children,
  onDragOver,
  onDragDrop,
  onDragStart,
  onInput,
  onClick
}: IContentBuilderDraggableComponent) => {
  if (type === IComponentType.GRID) {
    return (
      <ContentBuilderGridComponent
        id={id}
        children={children}
        onDragOver={onDragOver}
        onDragDrop={onDragDrop}
      />
    );
  } else {
    return (
      <DraggableComponent
        containerId={id}
        key={`drag-${id}`}
        name={name}
        type={type}
        onDragStart={onDragStart}
        draggable={true}
        dropped={true}
        onInput={onInput}
        onClick={onClick}
      />
    );
  }
};
