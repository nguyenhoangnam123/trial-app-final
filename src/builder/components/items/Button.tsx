import * as React from "react";

export const Button = (props: any) => {
  const { children, id, onDragStart, type } = props;
  return (
    <button
      onDragStart={e => onDragStart(e, id, type)}
      className="btn btn-primary"
      data-id={id}
      type={type}
      draggable={true}
    >
      {children}
    </button>
  );
};
