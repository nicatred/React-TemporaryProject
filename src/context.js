import React, { Component } from 'react';

const MemberContext = React.createContext();
 

const reducer = (state,action) =>{
  switch(action.type){
case "DELETE_MEMBER":
  return {
    ...state,
    members:state.members.filter(member=> action.payload !== member.id)
  }
  case "ADD_MEMBER":
  return {
    ...state,
    members:[...state,action.payload]
  }
  default:
  return state;
  }
}
// var uniqid = require('uniqid');
export  class MemberProvaider extends Component {
  
    state = {
        members : [
          {
             id :"uniqid()1",
             name:"Nicat",
             salary:"300"
          },
          {
            id :"uniqid()2",
            name:"Ehmed",
            salary:"400"
          },
          {
          id :"uniqid()3",
          name:"Saleh",
          salary:"500"
          }
        ],
        dispatch: action=>{
          this.setState(state=> reducer(state,action))
        }
      }
  render() {
    return (
      <div>
        <MemberContext.Provider value={this.state}>
            {this.props.children}
        </MemberContext.Provider>
      </div>
    )
  }
}
const MemberConsumer = MemberContext.Consumer;

export default MemberConsumer;