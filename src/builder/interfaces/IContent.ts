import { IComponent } from "./IComponent";

export interface IContent {
  id?: string;
  cssClass?: string;
  components: IComponent[];
}

export interface IContentBuilderComponent extends IContent {
  onDragStart?: (
    event: React.DragEvent<HTMLElement>,
    name: string,
    type: string
  ) => void;
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDragDrop: (event: React.DragEvent<HTMLElement>, id: string) => void;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  onInput?: (ev: React.FormEvent<HTMLElement>) => void;
}

export interface IContentBuilderDraggableComponent {
  id: string;
  name: string;
  type: string;
  children: IComponent[];
  onDragStart?: (
    event: React.DragEvent<HTMLElement>,
    name: string,
    type: string
  ) => void;
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDragDrop: (event: React.DragEvent<HTMLElement>, id: string) => void;
  onChange?: (ev: React.FormEvent<HTMLElement>) => void;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  onInput?: (ev: React.FormEvent<HTMLElement>) => void;
}

export interface IContentBuilderGridComponent {
  id: string;
  children: IComponent[];
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDragDrop: (event: React.DragEvent<HTMLElement>, id: string) => void;
}
