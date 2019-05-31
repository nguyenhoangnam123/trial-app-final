import * as React from "react";
import { NavigationComponent } from "../navigation";
import styled from "styled-components";

export interface ILayoutComponent {
  draggables: React.ReactNode;
  droppables: React.ReactNode;
}

const Navigation = styled(NavigationComponent)`
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);
  min-height: 40px;
  display: table;
  width: 100vw;
`;

export const LayoutComponent = ({
  draggables,
  droppables
}: ILayoutComponent) => {
  return (
    <div className="builder">
      <Navigation className="abc" />
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
            <div className="builder-draggables">{draggables}</div>
          </div>
          <div
            className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8"
            id="pageMarkUp"
          >
            <div className="builder-droppables">{droppables}</div>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2" />
        </div>
      </div>
    </div>
  );
};
