import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todolist,settodolist]=useState([])
  

  let savetodolist=(event)=>{

    let todoname=event.target.todoname.value;
    if(!todolist.includes(todoname))
    {
      let finaltodo=[...todolist,todoname]
      settodolist(finaltodo);
    }
    else{
      alert("To do already exsit");
    }
    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{
    return(
      <Todolistfunc value={value} key={index} indexnum={index} 
      todolist={todolist}
      settodolist={settodolist}
      />
    )
  }
  )

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={savetodolist}> 
        <input type='text' name='todoname'></input> <button>SAVE</button>
      </form>

      <div className='uldiv'>
       <ul>
         {list}
       </ul>
      </div>
    </div>
  );
}

export default App;

function Todolistfunc({value,indexnum,todolist,settodolist}) {

  let [status,setstatus]=useState(false)

  let deleterow=()=>{
      let finaldata = todolist.filter((v,i)=>i!=indexnum)
      settodolist(finaldata)
    }
  let checkstatus=()=>{
    setstatus(!status)
  }

  return(
    
    <li className={(status) ? 'completetask' : ''} onClick={checkstatus}>{indexnum+1}. {value} <span onClick={deleterow}>&times;</span></li>
  ) 
}
