import React, { Component, Fragment } from 'react'
import { Col,  Row, Table } from 'reactstrap'

// https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line


class CheckBoxs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rendering: false,
      
     
      fruites: [
        { id: 1, value: "banana", isChecked: false },
        { id: 2, value: "apple", isChecked: false },
        { id: 3, value: "mango", isChecked: false },
        { id: 4, value: "grap", isChecked: false },
        { id: 5, value: "charry", isChecked: false },
        { id: 6, value: "strawberry", isChecked: false },
        { id: 7, value: "Blueberry", isChecked: false },
        { id: 8, value:  "Kiwi", isChecked: false },
        { id: 9, value: "banana2", isChecked: false },
        { id: 10, value: "apple3", isChecked: false },
        { id: 11, value: "mango4", isChecked: false },
        { id: 12, value: "grap5", isChecked: false },
        { id: 13, value: "charry6", isChecked: false },
        { id: 14, value: "strawberry7", isChecked: false },
        { id: 15, value: "Blueberry8", isChecked: false },
        { id: 16, value:  "Kiwi9", isChecked: false },
        
      
      ],
      list: [],
    }
  }

  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.map((fruite) => fruite.isChecked = event.target.checked)
    this.setState({ fruites: fruites,
   })
    console.log('fruites', fruites)
    }




  handleCheckChieldElement = (event) => {
   let fruites = this.state.fruites
    fruites.forEach(fruite => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;
      })
  this.setState({ fruites: fruites,
   
     })
    console.log("qeeeeeeee", fruites)
  }





  render() {
    const {fruites} = this.state
    return (
      <div >
        <h1> Check and Uncheck All Example </h1>
        <input type="checkbox" onClick={this.handleAllChecked} value="checkedall" /> Check / Uncheck All
     
        
         
        <div >
          
          {this.state.fruites && this.state.fruites.length > 0 && this.state.fruites.map((fruite,index) => {
             return (
             <span>
             { index<=4 ? <span>  <input key={index} onClick={this.handleCheckChieldElement} type="checkbox" checked={fruite.isChecked} value={fruite.value} /> {fruite.value}</span> : '' }
           </span>
           )
       })  }
        </div>
  
         
      
     



  
  <div>
{ this.state.fruites && this.state.fruites.length > 0 && fruites.map((fruite,index) => {
    return (
             <span>
              {   index>=4 && index<=6 ? <span>  <input key={index} onClick={this.handleCheckChieldElement} type="checkbox" checked={fruite.isChecked} value={fruite.value} /> {fruite.value}</span>
           : ""}
         </span>  
            )
         }) }
      </div>
  
  
  
  
   
   <div>
   { this.state.fruites && this.state.fruites.length > 0 && fruites.map((itm,index) => {
   if(itm.isChecked===true){
       return (
        < span key={index}>{itm.value} {index != (itm.length) ? ',' : ''} </span>
       )
     }
     
    })  }
    </div>
   
  
      </div>
    );
  }
}

export default CheckBoxs