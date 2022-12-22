import React, { Component } from 'react';
import posed from 'react-pose';
import uniqid from 'uniqid'
import MemberConsumer from '../context';

const Kub = posed.div({
  visible: { opacity: 1 , applyAtStart : {display:"block"}},
  hidden: { opacity: 0 , applyAtEnd : {display:"none"} }
});

class AddMember extends Component {
  state={
     isVisible:false,
     name:"",
     salary:""
  }
  
  hider=(e)=>{
    this.setState({
      isVisible : !this.state.isVisible
    })
}
addMember = (dispatch,e)=>{
  console.log("aa");
  e.preventDefault();
  const{name,salary}=this.state;
 var newMember = {
  id:uniqid(),
  name :name,
  salary:salary
 }
 dispatch({type:"ADD_MEMBER",payload:newMember});
 console.log(newMember);
}
changeInput=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
  render() {
    const {isVisible,name,salary} = this.state;
    return <MemberConsumer>
       {
        value => {
          const{dispatch}=value;
          return (
      
            <div className="col-md-8 mb-4 container">
              
              <button className="btn btn-dark" onClick={this.hider} > {isVisible ? "Formu göstər":"Formu Gizlə"}</button>
              <Kub pose = {isVisible ? 'visible' : 'hidden' } >
              <div className="card ">  
              <div className="card-header">
              <h1>Üzv əlavə etmə formu</h1>
              </div>
              <div className="card-body">
              <form onSubmit={this.addMember.bind(this,dispatch)}>
                <div className="form-group row d-flex align-items-center mb-2">
                  <label htmlFor="name" className="col-lg-2 col-form-label">Ad</label>
                  <div className="col-lg-10">
                  <input className="form-control" id="id" name="name" placeholder="ad daxil edin" value={name} onChange={this.changeInput}></input>
                  </div>
                 
                </div>
                <div className="form-group row d-flex align-items-center mb-2">
                  <label htmlFor="salary" className="col-lg-2 col-form-label">Maaş</label>
                  <div className="col-lg-10">
                  <input className="form-control" id="salary" name="salary" placeholder="maaş daxil edin" value={salary} onChange={this.changeInput}></input>
                  </div>
                 
                </div>
                <div className="row d-flex align-items-center ">
                <div className="d-flex col-lg-12 justify-content-end">
                <button className="btn btn-danger mt-2 mb-2 " type="submit">Yadda saxla</button>
                </div>
                </div>
              
              
              </form>
              </div>
               </div>
               </Kub>
            </div>
      
          )
        }
       }

     </MemberConsumer>

    
  }
}
export  default AddMember;