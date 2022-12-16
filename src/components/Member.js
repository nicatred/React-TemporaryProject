import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Member extends Component {
   state = {
     isVisible:false
   }
   
   clicker = (e)=>{
       this.setState({
        isVisible : !this.state.isVisible
       })
   }
   
  render() 
  {
    const {name,salary}= this.props;
    const{isVisible}=this.state;
    return (
      <div className="container">
     <div className="card mb-4" >
  <div className="card-header d-flex justify-content-between" onClick ={ this.clicker}>
    <h4 className="d-inline" >{name}  </h4>
     <i className="fa-solid fa-trash" style={{cursor:"pointer"}} > </i>
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

// Member.propTypes ={
//     name : PropTypes.string.isRequired,
//     salary : PropTypes.string.isRequired
// }

export default  Member;

