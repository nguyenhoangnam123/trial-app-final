import { IElement } from "./interfaces";
import { v4 as uuid } from "uuid";

export const initItems: IElement[] = [
  { id: "0", type: "Container", childrens: ["1", "2"] },
  { id: "1", type: "Navigation", childrens: [] },
  { id: "2", type: "Section", childrens: ["3", "4", "5"] },
  { id: "3", type: "DragZone", childrens: [], size: 3 },
  { id: "4", type: "DragAndDropZone", childrens: [], size: 3 },
  { id: "5", type: "SettingZone", childrens: [], size: 3 }
];

export const InitApplicationState = (
  initItems: IElement[],
  types: string[]
) => {
  // refresh drag zone
  refreshDragZone(initItems);
  // set new items in list and update dragZone children
  types.map(type => {
    updateEach(type, initItems);
  });
  return initItems;
};

export const createNewComponent = (type: string) => {
  const randomId = uuid();
  const newComp: IElement = { id: randomId, type: type, childrens: [] };
  return newComp;
};

export const updateEach = (type: string, items: IElement[]) => {
  // create new comp
  const newComp = createNewComponent(type);
  // push new comp to items
  initItems.push(newComp);
  // update dragZone children
  initItems.map(item => {
    if (item.type === "DragZone") {
      item.childrens.push(newComp.id);
    }
  });
  return initItems;
};

export const refreshDragZone = (items: IElement[]) => {
  const dragZone: IElement = items.find(item => item.type === "DragZone");
  console.log(dragZone.childrens);
  // remove redundant items
  dragZone.childrens.map((id: string) => {
    return items.filter((item: IElement, id: any) => item.id !== id);
  });
  // empty children of dragZone
  dragZone.childrens = [];
  return items;
};
