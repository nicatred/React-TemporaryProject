import React, { Component } from 'react';
import Member from './components/Member';

const MemberContext = React.createContext();

export  class MemberProvaider extends Component {
    state = {
        members : [
          {
             id :1,
             name:"Nicat",
             salary:"300"
          },
          {
            id :2,
            name:"Ehmed",
            salary:"400"
          },
          {
          id :3,
          name:"Saleh",
          salary:"500"
          }
        ]
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