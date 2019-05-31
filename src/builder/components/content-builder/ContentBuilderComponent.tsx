import * as React from "react";

import { ContentComponent, DroppableComponent } from "../";
import { IComponent } from "../../interfaces";
import { ContentBuilderDraggableComponent } from "./";
import { IContentBuilderComponent } from "../../interfaces";

export class ContentBuilderComponent extends React.Component<
  IContentBuilderComponent
> {
  public render() {
    const {
      components,
      id,
      onDragStart,
      onDragOver,
      onDragDrop,
      onInput,
      onClick
    } = this.props;
    return (
      <ContentComponent>
        {components.map(
          ({ name, type, children }: IComponent, componentIndex: number) => (
            <ContentBuilderDraggableComponent
              key={`${id}_${componentIndex}`}
              id={`${id}_${componentIndex}`}
              name={name}
              type={type}
              children={children}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDragDrop={onDragDrop}
              onInput={onInput}
              onClick={onClick}
            />
          )
        )}
        <DroppableComponent
          name={id}
          onDragOver={ev => onDragOver(ev)}
          onDrop={ev => onDragDrop(ev, id)}
        />
      </ContentComponent>
    );
  }
}
