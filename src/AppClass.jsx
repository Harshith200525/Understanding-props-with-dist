import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{ 

  // code here
  render(props){

    return(
      <>
        <h1>
          Kalvium gallary
        </h1>
        <div className='image-container'>
        {this.props.data.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt='' />
            </div>
          )
        })}
        </div>
        <div>
          Using class Component
        </div>
      </>
    )
  }

}
