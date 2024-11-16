// Learning from React-လို-တို-ရှင်း - အခန်း(၂) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 16 Nov 2024 (11:50 AM)
// Description : Step 7 - State Explanation

import React from "react";

class Item extends React.Component{
  render(){
    return <li>{this.props.name}, ${this.props.price}</li>
  }
}

class App extends React.Component{
  state = {
    items : [
      {id: 1, name: 'Apple', price: 0.99},
      {id: 2, name: 'Orange', price: 0.89}
    ]
  }
  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {
            this.state.items.map(i => {
              return(
                <Item name={i.name} price={i.price} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;