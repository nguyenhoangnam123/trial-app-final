import * as React from "react";

export const LayoutDragAndDropZone = (props: any) => {
  const { onDrop, onDragOver, id, type } = props;
  return (
    <div
      className="col-md-8"
      data-id={id}
      onDragOver={onDragOver}
      onDrop={onDrop}
      id={type}
    >
      {props.children}
    </div>
  );
};
