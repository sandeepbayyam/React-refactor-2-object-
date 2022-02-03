import React from "react";
import "./style.css";
import Student from "./Student"
class App extends React.Component{
  constructor(){
    super();
    this.state={
      students:[
        {
          fullname:'praveen',
          status:true
        },
        {
          fullname:'rahul',
          status:false
        },
        {
          fullname:'sandeep',
          status:true
        },
        {
          fullname:'kiran',
          status:true
        },
      ]
    }
  }
  render(){
    return (
      <div>
       <ul>
         {
           this.state.students.map((s,i)=>{
             return(<Student s={s}></Student>)
           })
         }
       </ul>
      </div>
    );
  }
}
export default App;
