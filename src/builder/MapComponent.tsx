import * as React from "react";
import {
  LayoutContainer,
  LayoutNavigation,
  LayoutBody,
  LayoutSection,
  LayoutBodyLayout,
  LayoutDragZone,
  LayoutDragAndDropZone,
  LayoutSettingZone,
  Row,
  Column,
  Button
} from "./components";

export const TYPE_MAP: any = {
  Container: (props: any) => <LayoutContainer {...props} />,
  Navigation: (props: any) => <LayoutNavigation {...props} />,
  Body: (props: any) => <LayoutBody {...props} />,
  Section: (props: any) => <LayoutSection {...props} />,
  Layout: (props: any) => <LayoutBodyLayout {...props} />,
  DragZone: (props: any) => <LayoutDragZone {...props} />,
  DragAndDropZone: (props: any) => <LayoutDragAndDropZone {...props} />,
  SettingZone: (props: any) => <LayoutSettingZone {...props} />,
  Row: (props: any) => <Row {...props} />,
  Column: (props: any) => <Column {...props} />,
  Button: (props: any) => <Button {...props} />
};
