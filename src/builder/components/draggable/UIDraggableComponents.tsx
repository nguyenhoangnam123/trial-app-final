import * as React from "react";
import { IDraggableComponent } from "../../interfaces";

export const Button = (props: IDraggableComponent) => {
  const {
    containerId,
    name,
    type,
    onDragStart,
    draggable = true,
    dropped,
    onInput,
    onClick,
    children
  } = props;
  return (
    <button
      className="draggable-component"
      draggable={draggable}
      onDragStart={ev => onDragStart(ev, name, type)}
      contentEditable={dropped === true ? true : false}
      suppressContentEditableWarning={true}
      onInput={onInput}
      onClick={onClick}
      data-id={containerId}
    >
      {children}
    </button>
  );
};

export const Grid = (props: IDraggableComponent) => {
  const {
    name,
    type,
    onDragStart,
    draggable = true,
    dropped,
    onInput,
    onClick,
    children
  } = props;
  return (
    <div
      className="draggable-component"
      draggable={draggable}
      onDragStart={ev => onDragStart(ev, name, type)}
      contentEditable={dropped === true ? true : false}
      suppressContentEditableWarning={true}
      onInput={onInput}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const GridItem = (props: IDraggableComponent) => {
  const {
    name,
    type,
    onDragStart,
    draggable = true,
    dropped,
    onInput,
    onClick,
    children
  } = props;
  return (
    <div
      className="draggable-component"
      draggable={draggable}
      onDragStart={ev => onDragStart(ev, name, type)}
      contentEditable={dropped === true ? true : false}
      suppressContentEditableWarning={true}
      onInput={onInput}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Card = (props: IDraggableComponent) => {
  const {
    name,
    type,
    onDragStart,
    draggable = true,
    dropped,
    onInput,
    onClick,
    children
  } = props;
  return (
    <div
      className="draggable-component"
      draggable={draggable}
      onDragStart={ev => onDragStart(ev, name, type)}
      contentEditable={dropped === true ? true : false}
      suppressContentEditableWarning={true}
      onInput={onInput}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Heading = (props: IDraggableComponent) => {
  const {
    name,
    type,
    onDragStart,
    draggable = true,
    dropped,
    onInput,
    onClick,
    children
  } = props;
  return (
    <h1
      className="draggable-component"
      draggable={draggable}
      onDragStart={ev => onDragStart(ev, name, type)}
      contentEditable={dropped === true ? true : false}
      suppressContentEditableWarning={true}
      onInput={onInput}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

export const Image = (props: IDraggableComponent) => {
  const {
    name,
    type,
    onDragStart,
    draggable = true,
    dropped,
    onInput,
    onClick,
    children
  } = props;
  return (
    <img
      className="draggable-component"
      draggable={draggable}
      onDragStart={ev => onDragStart(ev, name, type)}
      contentEditable={dropped === true ? true : false}
      suppressContentEditableWarning={true}
      onInput={onInput}
      onClick={onClick}
      src="noimage.jpg"
      alt="no imagefound"
    />
  );
};
