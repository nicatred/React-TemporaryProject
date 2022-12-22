import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import UserConsumer from '../context'
class Member extends Component {

   state = {
     isVisible:true
   }
   
   hider = (e) =>{
       this.setState({
        isVisible : !this.state.isVisible
       })
   }

   onDeleteUser =(dispatch,e) =>{
   
    const {id} = this.props;
    dispatch({type:"DELETE_MEMBER",payload:id});
   }
   
   
  render() 
  {
    
    const {name,salary}= this.props;
    const{isVisible}=this.state;
    
    return (<UserConsumer>
  {
  value =>{
    const{dispatch} = value;
 
      return (
      <div className="container">
     <div className="card mb-4" style={!isVisible ? {backgroundColor:"darkgray",color:"white"} :null} >
  <div className="card-header ">
    <h4 className="d-inline" onClick ={ this.hider} >{name}  </h4>
     <i className="fa-solid fa-trash" style={{cursor:"pointer"}} onClick = {this.onDeleteUser.bind(this,dispatch)}></i>
  </div>
  <div>
    {!isVisible ?
    <ul style={{listStyleType:"none"}}>
    <li>
       Maaş : {salary}
    </li>
    </ul>: null}
    </div>
</div>
      </div>
    )
}
}
    </UserConsumer>)
      }
    }
export default  Member;

