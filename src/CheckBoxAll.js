import React from 'react'
import { Button, Col, Form, Input, Row } from 'reactstrap';

class MultiCheckBox extends React.Component{

    constructor(){
        super();
        this.state = {
            showCheck: false,
            regions: []
        }

        
    }

    handleCheckRegionBox = (event) => {

        const regions = this.state.regions
        if(event.target.checked){
          regions.push(event.target.value)
        }
        else {
          let index = regions.indexOf(event.target.value)
          regions.splice(index, 1);
        }
        
        this.setState({
          regions: regions
        })
        // console.log('yyyyyResion', regions )
        }


    submitRegion = (event) =>{
     event.preventDefault()
     // console.log('qqqqq',  this.state.region)
      this.setState({
             
              showCheck: true
              
            })
          }


          handleAllSelect = (event) => {
            let regions = this.state.regions
            
            // regions.map((regions) => regions.isChecked = event.target.checked)
            this.setState((prevState) => ({ regions: [event.target.value, ...prevState.regions], 
                  }))
            console.log('regions', regions,
           
            )
            }
        





    render(){
        return(
            <div>
                <Form onSubmit={this.submitRegion}> 
                <hr/>
                           <Row> 
                               <div><Input type='checkbox' onChange={this.handleAllSelect} /><label>All Select</label></div>
                           {/* <Col className="clo-1"><Input type="checkbox"/><label><strong>US Protectorates</strong></label></Col> */}
                            <Col className="clo-1">
                              <div><Input type="checkbox" isChecked = "false" name="Japan" value="Japan" id="inlineCheckboxh100" onChange={this.handleCheckRegionBox }/><label>Japan</label></div>
                              <div><Input type="checkbox" isChecked = "false" name="Canada" value="Canada" onChange={this.handleCheckRegionBox }/><label>Canada</label></div>                     
                            </Col>
                            <Col className="clo-1">
                              <div><Input type="checkbox" isChecked = "false" name="Niue" value="Niue" id="inlineCheckboxh101" onChange={this.handleCheckRegionBox }/><label>Niue</label></div>
                              <div><Input type="checkbox"  isChecked = "false"name="Tokelau" value="Tokelau" id="inlineCheckboxh103" onChange={this.handleCheckRegionBox }/><label>Tokelau</label></div>                      
                            </Col>
                            <Col className="clo-1">
                              <div><Input type="checkbox" isChecked = "false" name="Australia" value="Australia" id="inlineCheckboxh104" onChange={this.handleCheckRegionBox }/><label>Australia</label></div>
                              <div><Input type="checkbox" isChecked = "false" name="New Zealand" value="New Zealand" onChange={this.handleCheckRegionBox }/><label>New Zealand</label></div>                      
                            </Col>
                            <Col className="clo-1">
                              <div><Input type="checkbox" isChecked = "false" name="Indonesia" value="Indonesia" id="inlineCheckboxh105" onChange={this.handleCheckRegionBox }/><label>Indonesia</label></div>
                              <div><Input type="checkbox" isChecked = "false" name="Argentina" value="Argentina" onChange={this.handleCheckRegionBox }/><label>Argentina</label></div>                      
                            </Col>
                            
                            </Row>
                            </Form>
                            { this.state.regions.map((item, i, arr, index) => 
          <span key={index}>{  item} {i != (arr.length-1) ? ',' : ''}   </span>
          )}
            </div>
        )  
    }
}

export default MultiCheckBox;