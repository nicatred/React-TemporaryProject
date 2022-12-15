import './App.css';
import Members from './components/Members'

function App() {
  state ={
    members : [
      {
         id :1,
         name:"Nicat",
         salary:300
      },
      {
        id :2,
        name:"Ehmed",
        salary:400
     },
     {
      id :3,
      name:"Saleh",
      salary:500
   }
    ]
  }
  return (
    <div className="App">
        <Members members={this.state.members}/>
    </div>
  );
}

export default App;
