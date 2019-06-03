export interface ILayoutBuilderState {
  items: IElement[];
}

export interface IElement {
  id: string;
  type: string;
  childrens: string[];
  size?: number;
}
