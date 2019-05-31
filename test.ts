class ElementContainer extends Container<{ id: string, type: string, children: [] }> {

}

const ELEMENTS = {
  Section: class Section extends React.Component {
    render() {
      return <section>{this.props.children}</section>
    }
  }
}

class Builder extends React.Component {
  state = {
    items: [
      { id: 0, type: 'Body', children: [1] },
      { id: 1, type: 'Section', children: [2] },
      { id: 2, type: 'Button', children: [] }
    ]
  }
  items: new Map()

  componentDidMount() {
    this.state.items.map(item => {
      const elementContainer = new ElementContainer(item)
      this.items.set(item.id, elementContainer)
    })
  }
  renderElement = (id) => {
    const container = this.items.get(id)
    return <Subscribe to={[container]}>
      {() => {
        const Component = ELEMENTS[item.type]
        return <Component>
          {items.children.map(this.renderElement)}
        </Component>
      }}
    </Subscribe>
  }
  render() {
    return <div>
      {this.renderElement(0)}
    </div>
  }
}