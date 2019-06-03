import * as React from "react";

export const Row = (props: any) => {
  const { children, id, onDrop, onDragOver, onDragStart, type } = props;
  return (
    <div
      className="row drag drag-item"
      data-id={id}
      onDragStart={e => onDragStart(e, id, type)}
      onDragOver={onDragOver}
      onDrop={onDrop}
      draggable={true}
    >
      {children}
    </div>
  );
};
