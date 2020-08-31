class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if(!this._root){
      this._root = this.render().root;
    }
    return this._root;
  }
}

export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type;
  }
  
  // 设置元素的属性
  for(let i in attributes) {
    e.setAttribute(i, attributes[i]);
  }
  // 添加字集
  let insertChildren = (children) => {
    for(let child of children) {
      // 判断如果是文本节点，
      if (typeof child === 'string') {
        // 创建个文本节点
        child = new TextWrapper(child);
      }
  
      if ((typeof child === 'object') && (child instanceof Array)) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    } 
  }

  insertChildren(children);
  return e;
}


export function render(component, parentElement) {
  parentElement.appendChild(component.root);
}

