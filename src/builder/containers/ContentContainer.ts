import { Container } from "unstated-x";
import { IContent, IComponent } from "../interfaces";
import { fromJS, updateIn, Map } from "immutable";

interface IContentContainer {
  selected: string;
  dashboardState: IContent[];
}

class ContentContainer extends Container<IContentContainer> {
  state: IContentContainer = {
    selected: "",
    dashboardState: [
      {
        components: []
      }
    ]
  };

  updateDashboard = async (
    containerId: string,
    INT_LENGTH: number,
    newComponent: IComponent
  ) => {
    const componentsPath = this.generateComponentPath(containerId, INT_LENGTH);
    const { dashboardState } = this.state;
    let componentState = fromJS(dashboardState);
    componentState = componentState.setIn(
      componentsPath,
      componentState.getIn(componentsPath).push(newComponent)
    );
    await this.setState({ dashboardState: componentState.toJS() });
  };

  updateContent = async (
    content: string,
    containerId: string,
    INT_LENGTH: number
  ) => {
    const componentsPath = this.generateComponentPath(containerId, INT_LENGTH);
    componentsPath.pop();

    const { dashboardState } = this.state;

    let componentState = fromJS(dashboardState);

    await componentState.updateIn(componentsPath, (items: any) =>
      items.set("name", content)
    );

    console.log(componentState.getIn([...componentsPath, "name"]));

    await this.setState({ dashboardState: componentState.toJS() }, () =>
      console.log(this.state.dashboardState)
    );
  };

  generateComponentPath = (containerId: string, INT_LENGTH: number) => {
    const containerArray: string[] = containerId.split("_");
    containerArray.shift(); // ignore first param, it is string prefix

    const componentsPath: Array<number | string> = [];

    containerArray.forEach((id: string, index: number) => {
      componentsPath.push(parseInt(id, INT_LENGTH));
      componentsPath.push(index === 0 ? "components" : "children");
    });
    return componentsPath;
  };
}

const contentContainer = new ContentContainer({
  selected: ""
});
export default contentContainer;
