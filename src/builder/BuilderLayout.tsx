import { fromJS } from "immutable";
import * as React from "react";

import "./builder-layout.scss";

import {
  ContentBuilderComponent,
  DraggableComponent,
  LayoutComponent
} from "./components";
import { DraggableComponents } from "./draggable-components";
import { IComponent, IComponentType, IContent } from "./interfaces";
import contentContainer from "./containers/ContentContainer";
import { Subscribe } from "unstated-x";

const INT_LENGTH = 3;

export class BuilderLayout extends React.Component {
  public render() {
    const draggables = DraggableComponents.map(
      ({ name, type }: IComponent, index: number) => (
        <DraggableComponent
          key={`comp-${index}`}
          name={name}
          type={type}
          onDragStart={this.onDragStart}
          dropped={false}
        />
      )
    );
    const droppables = (
      <Subscribe to={[contentContainer]}>
        {() => {
          const dashboardState = contentContainer.state.dashboardState;
          return dashboardState.map(
            ({ id, cssClass, components }: IContent, index: number) => {
              return (
                <ContentBuilderComponent
                  key={`cb_${index}`}
                  id={`cb_${index}`}
                  cssClass={cssClass}
                  components={components}
                  onDragStart={this.onDragStart}
                  onDragDrop={this.onDragDrop}
                  onDragOver={this.onDragOver}
                  onInput={e => this.onInput(e)}
                  onClick={this.onClick}
                />
              );
            }
          );
        }}
      </Subscribe>
    );
    return <LayoutComponent draggables={draggables} droppables={droppables} />;
  }

  private onDragStart(
    event: React.DragEvent<HTMLElement>,
    name: string,
    type: string
  ) {
    event.dataTransfer.setData("id", name);
    event.dataTransfer.setData("type", type);
  }

  private onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  private onDragDrop = async (
    event: React.DragEvent<HTMLDivElement>,
    containerId: string
  ) => {
    const name = event.dataTransfer.getData("id");
    const type = event.dataTransfer.getData("type");

    const newComponent: IComponent = this.generateComponent(name, type);
    await contentContainer.updateDashboard(
      containerId,
      INT_LENGTH,
      newComponent
    );
    const selected = document.getElementById("pageMarkUp").innerHTML;
    await contentContainer.setState({ selected });
  };

  private onInput = async (ev: React.FormEvent<HTMLElement>) => {
    const content = ev.currentTarget.innerText;
    const containerId = ev.currentTarget.getAttribute("data-id");

    // update content on input
    await contentContainer.updateContent(content, containerId, INT_LENGTH);

    // update selected, need to push up container to avoid rerender
    const selected = document.getElementById("pageMarkUp").innerHTML;
    await contentContainer.setState({ selected });
  };

  private onClick = (ev: React.FormEvent<HTMLElement>) => {
    console.log("clicked");
  };

  private generateComponent = (name: string, type: string): IComponent => {
    let newComponent: IComponent = {
      name,
      type
    };
    if (type === IComponentType.GRID) {
      // TODO - predefine this somewhere else (default props)
      const gridItem: IComponent = {
        children: [],
        name: "",
        renderProps: {
          size: 4 // <- make this configurable
        },
        type: IComponentType.GRID_ITEM
      };
      newComponent = {
        ...newComponent,
        children: [gridItem, gridItem, gridItem] // <- make this configurable
      };
    }
    return newComponent;
  };
}
