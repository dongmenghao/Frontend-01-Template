function create(Cls, attributes, ...children) { 
  var o = new Cls();

  for (var name in attributes) { 
    o.setAttribute(name, attributes[name])
  }

  for (var child of children) { 
    o.appendChild(child)
  }
  return o;
}

// class Parent { 
//   constructor() { 
//     this.children = [];
//   }

//   set class(v) { 
//     console.log("Parent::class", v)
//   }

//   setAttribute(name, value) { 
//     console.log(name, value)
//   }
  
//   appendChild(child) {
//     this.children.push(child)
//   }
// }

class Div { 
  constructor() { 
    this.children = [];
    this.root = document.createElement("div")
  }

  setAttribute(name, value) { 
    this.root.setAttribute(name, value);
  }

  appendChild(child) { 
    this.children.push(child);
  }

  mountTo(parent) { 
    parent.appendChild(this.root);

    for (let child of this.children) { 
      child.mountTo(this.root)
    }
  }
}

let component = <Div id="a" class="b">
  <Div></Div>
  <Div></Div>
  <Div></Div>
</Div>
console.log(component)
component.mountTo(document.body)