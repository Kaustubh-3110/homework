import { useState } from 'react';
import './App.css';
import Navbarcomponent from './components/Navbarcomponent';
import Randercomponents from './components/Randercomponents';


function App() {
  const [todoInput, settodoinput] = useState('')
  const [storedTodo, setStoreTodo] = useState([])
  const [isedit, setedit] = useState(false)
  const [backuptodoid, setbackuptodoid] = useState()

  function inputhandlar(event) {
    settodoinput(event.target.value)
  }
  function createhandlar() {
    const id = Math.round(Math.random() * 1000000000)
    const newtodo = [...storedTodo, { id: id, text: todoInput, completed: false }]
    setStoreTodo(newtodo)
    settodoinput('')

  }
  function completehandllar(todoid) {
    const result = storedTodo.find(item => item.id === todoid)
    result.completed = !result.completed
    const newtodos = storedTodo.map(item => item.id === todoid ? result : item)
    setStoreTodo(newtodos)

  }
  function deleteHandler(todoid) {
    const newtodos = storedTodo.filter(item => item.id !== todoid)
    setStoreTodo(newtodos)
  }
  function edithandlar(todoid) {
    setedit(true)
    setbackuptodoid(todoid)
    const result = storedTodo.find(item => item.id === todoid)
    settodoinput(result.text)
  }
  function updatehandler() {
    const result = storedTodo.find(item => item.id === backuptodoid)
    result.text = todoInput
    const updatedtodo = storedTodo.map(item => item.id === backuptodoid ? result : item)
    setStoreTodo(updatedtodo)
    setedit(false)
    settodoinput('')
  }

  return (
    <>
      <Navbarcomponent />
      <div className='flex flex-col justify-center items-center h-[70vh] '>
        <div className='w-[500px] flex  justify-center items-center mb-[30px]'>
          <input value={todoInput} onChange={inputhandlar} placeholder='Type here....' className='border w-[70%]' />
          <button onClick={isedit ? updatehandler : createhandlar} className='border w-[30%]'>{isedit ? 'update' : 'create'}</button>
        </div>
        {storedTodo.map((element, index) => {
          return (
            <Randercomponents key={index} todo={element.text} index={index} completehandllar={completehandllar} iscomplet={element.completed} id={element.id} deleteHandler={deleteHandler} edithandlar={edithandlar} />
          )

        })}

      </div>


    </>

  );
}

export default App