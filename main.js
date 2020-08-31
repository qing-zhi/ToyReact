import {createElement, render, Component} from "./toy-react.js";

class MyComponent extends Component {
  render() {
    return <div>
      <div>my component</div>
      {this.children}
    </div>
  }
}




render(<MyComponent id="a" class="c">
  <div>abc</div>
  <div>123</div>
  <div>实现简单jsx</div>
</MyComponent>, document.body);