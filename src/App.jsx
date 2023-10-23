import { useState } from 'react'
import Header from './components/header'
import Tasks from './components/Tasks'
// import Task from '.components/Task'
import AddTask from './components/AddTask'


// STATE LIVES HERE
function App() {
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dentist Appt',
        day: 'Oct. 4th, 1pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Car service',
        day: 'Oct. 9th, 11am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Dog wash',
        day: 'Nov. 19th, 9am',
        reminder: true,
    }
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  // console.log(id)
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}

const deleteTask = (id) => {
  // we 'delete' things by preventing them from showing up in the UI
  // This would obvi be different if we had an actual server
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id ?
  { ...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowTaskForm
      (!showTaskForm)} showAdd={showTaskForm}
      />
      {/* Quick ternary: if showTaskForm is true then... */}
      {showTaskForm && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks}
      onDelete={deleteTask} onToggle={toggleReminder}
      /> : 'There are currently no tasks'}
    </div>
  )
}

export default App
