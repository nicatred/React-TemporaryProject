import React, { Component } from 'react';
import Member from './Member';
import MemberConsumer from '../context';

 class Members extends Component { 
  render()
  {
    return (
   <MemberConsumer>
{
  value =>{
    const{members}=value;
      return (
       <div>
            {
     
                    members.map(member => {
                   return(
                     <Member name = {member.name} salary = {member.salary} id={member.id}/>
                         )
                              })
            }
                       </div>
              )
  }
}
   </MemberConsumer>

    )
  
 
    
  }
}

export default Members;
