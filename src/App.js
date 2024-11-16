// Learning from React-လို-တို-ရှင်း - အခန်း(၂) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 16 Nov 2024 (11:50 AM)
// Description :  Step 8 - Changing State Explanation
//                Step 9 - Key Property and Virtual Dom
//                Step 10 - Input

import React from "react";

class Item extends React.Component{
  render(){
    return <li>{this.props.name}, ${this.props.price}</li>
  }
}

class App extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();

  state = {
    items : [
      // {id: 1, name: 'Apple', price: 0.99},
      // {id: 2, name: 'Orange', price: 0.89}
    ]
  }

  // function name : add function
  // purpose : add item and see the changing of the state
  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items:[
        ...this.state.items,
        {id,name,price}
      ],
    })

    this.nameRef.current.value = "";
    this.priceRef.current.value ="";
  }

  render(){
    return (
      <div>
        <h1>Hello React</h1>
        Name : 
        <input type="text" ref={this.nameRef} />
        Price : <input type="text" ref={this.priceRef} />
        <button onClick={this.add}>Add</button>
        <ul>
          {
            this.state.items.map(i => {
              return(
                <Item key={i.id} name={i.name} price={i.price} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;