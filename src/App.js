import './App.css';
import Members from './components/Members'
import AddMember from './components/AddMember';
function App(state) 
{
 
  return (
    <div className="App">
       <AddMember />
        <hr></hr>
        <Members />
    </div>
  );
}

export default App;
