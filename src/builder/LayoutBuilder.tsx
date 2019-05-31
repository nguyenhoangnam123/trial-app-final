import * as React from "react";
import { v4 as uuid } from "uuid";

const TYPE_MAP: any = {
  Body: (props: any) => <div className="container">{props.children}</div>,
  Section: (props: any) => <section className="main">{props.children}</section>,
  Grid: (props: any) => (
    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">{props.children}</div>
    </div>
  ),
  Column: (props: any) => {
    const { onDrop, onDragOver, id } = props;
    const className = `mdc-layout-grid__cell mdc-layout-grid__cell--span-${
      props.size
    }`;
    return (
      <div
        className={className}
        onDrop={onDrop}
        onDragOver={onDragOver}
        data-id={id}
      >
        {props.children}
      </div>
    );
  },

  Button: (props: any) => {
    const { onDragStart, id, type } = props;
    return (
      <button
        onDragStart={e => onDragStart(e, id, type)}
        draggable={true}
        id={id}
        type={type}
      >
        {props.children}
      </button>
    );
  }
};

export interface ILayoutBuilderState {
  items: IElement[];
}

export interface IElement {
  id: string;
  type: string;
  childrens: string[];
  size?: number;
}

export class LayoutBuilder extends React.Component {
  state: ILayoutBuilderState = {
    items: [
      { id: "0", type: "Body", childrens: ["1"] },
      { id: "1", type: "Section", childrens: ["2"] },
      { id: "2", type: "Grid", childrens: ["3", "4", "5"] },
      { id: "3", type: "Column", childrens: ["6"], size: 3 },
      { id: "4", type: "Column", childrens: [], size: 3 },
      { id: "5", type: "Column", childrens: [], size: 3 },
      { id: "6", type: "Button", childrens: [] }
    ]
  };

  renderElement = (id: string) => {
    console.log(this.state.items);
    const item: any = this.state.items.find(item => item.id === id);
    if (item) {
      const { type, childrens, size } = item;
      const Component = TYPE_MAP[type];
      return (
        <Component
          id={id}
          key={id}
          type={type}
          size={size}
          onClick={this.handleClick}
          onDragStart={this.handleOnDragStart}
          onDragOver={this.handleOnDragOver}
          onDrop={this.handleOnDragDrop}
        >
          {childrens.length
            ? childrens.map((id: string) => {
                return this.renderElement(id);
              })
            : type}
        </Component>
      );
    } else {
      return;
    }
  };

  render() {
    return <div>{this.renderElement("0")}</div>;
  }

  handleClick = () => {};
  handleOnDragStart = (
    e: React.DragEvent<HTMLElement>,
    id: string,
    type: string
  ) => {
    const idArray = this.state.items.map((item: IElement) => item.id);
    // check if component exist
    // if (idArray.indexOf(id)) {
    //   // generate random id
    //   const newId = uuid();
    //   e.dataTransfer.setData("id", newId);
    //   e.dataTransfer.setData("type", type);
    // }
    console.log(type);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("type", type);
  };

  handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    console.log("drag over");
  };

  handleOnDragDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const items = this.state.items;
    const containerId = e.currentTarget.getAttribute("data-id");

    const childId = e.dataTransfer.getData("id");

    const newPosition = this.updatePosition(containerId, items, childId);

    this.setState({ items: newPosition });
  };

  updatePosition = (
    containerId: string,
    items: IElement[],
    childId: string
  ) => {
    return items.map(item => {
      if (item.childrens.indexOf(childId) !== -1) {
        const updatedChildren = item.childrens.filter(
          (id: string) => id !== childId
        );
        item.childrens = updatedChildren;
      }
      if (item.id === containerId) {
        item.childrens.push(childId);
      }
      console.log("updated item: ", item);
    });
  };
}
