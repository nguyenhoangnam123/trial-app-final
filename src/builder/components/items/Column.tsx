import * as React from "react";

export const Column = (props: any) => {
  const { children, id, onDrop, onDragOver, onDragStart, type } = props;
  return (
    <div
      className="col-md-4 drag drag-item"
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
