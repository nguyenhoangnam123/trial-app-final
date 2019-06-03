import * as React from "react";
import { TYPE_MAP } from "./MapComponent";
import { IElement, ILayoutBuilderState } from "./interfaces";
import { InitApplicationState, initItems } from "./InitApplicationState";

const types = ["Row", "Column", "Button"];

export class LayoutBuilder extends React.Component {
  state: ILayoutBuilderState = {
    items: InitApplicationState(initItems, types)
  };

  renderElement = (id: string) => {
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
    return <>{this.renderElement("0")}</>;
  }

  handleClick = () => {};
  handleOnDragStart = (
    e: React.DragEvent<HTMLElement>,
    id: string,
    type: string
  ) => {
    e.stopPropagation();
    console.log(id);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("type", type);
  };

  handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  handleOnDragDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const items = this.state.items;
    // get father container id
    const containerId = e.currentTarget.getAttribute("data-id");

    // get child id and type
    const childId = e.dataTransfer.getData("id");
    const childType = e.dataTransfer.getData("type");

    // update position of component when drop
    const newPosition = this.updatePosition(containerId, items, childId);

    // update drag zone
    InitApplicationState(newPosition, types);
    this.setState({ items: newPosition });
  };

  updatePosition = (
    containerId: string,
    items: IElement[],
    childId: string
  ) => {
    items.map(item => {
      if (item.childrens.indexOf(childId) !== -1) {
        const updatedChildren = item.childrens.filter(
          (id: string) => id !== childId
        );
        item.childrens = updatedChildren;
      }
      if (item.id === containerId) {
        item.childrens.push(childId);
      }
    });
    console.log(items);
    return items;
  };

  removeDragClass = () => {
    const elements = document.getElementsByClassName("drag-item");
    let i = 0;
    for (i; i < elements.length; i++) {
      elements[i].classList.remove("drag-item");
    }
  };
}
