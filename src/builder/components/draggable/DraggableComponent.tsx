import * as React from "react";
import "./draggable-component.scss";
import { IDraggableComponent } from "../../interfaces";
import styled from "styled-components";
import {
  Button,
  Heading,
  Grid,
  GridItem,
  Card,
  Image
} from "./UIDraggableComponents";

const TYPE_MAP: any = {
  button: (props: IDraggableComponent) => <Button {...props} />,
  heading: (props: IDraggableComponent) => <Heading {...props} />,
  card: (props: IDraggableComponent) => <Card {...props} />,
  image: (props: IDraggableComponent) => <Image {...props} />,
  grid: (props: IDraggableComponent) => <Grid {...props} />,
  grid_item: (props: IDraggableComponent) => <GridItem {...props} />
};

export const DraggableComponent = (props: IDraggableComponent) => {
  const { type, name } = props;
  const Component = TYPE_MAP[type];
  return <Component {...props} children={name} />;
};
