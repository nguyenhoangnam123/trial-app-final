export interface IComponent {
  name: string;
  type: string;
  renderProps?: {
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  children?: IComponent[];
}

export interface IDraggableComponent {
  containerId?: string;
  name: string;
  type: string;
  draggable?: boolean;
  dropped?: boolean;
  onDragStart: (
    ev: React.DragEvent<HTMLElement>,
    name: string,
    type: string
  ) => void;
  onChange?: (ev: React.FormEvent<HTMLElement>) => void;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  onInput?: (ev: React.FormEvent<HTMLElement>) => void;
  children?: React.ElementType;
}

export interface IButton extends IDraggableComponent {}

export interface IDroppableComponent {
  name: string;
  onDragOver: (ev: React.DragEvent<HTMLElement>) => void;
  onDrop: (ev: React.DragEvent<HTMLElement>, componentName: string) => void;
  children?: React.ReactNode;
}

export interface IGridItemComponent {
  size: number;
  children: React.ReactNode;
  cssClass?: string;
}

export interface IGridComponent {
  children: React.ReactNode;
}
