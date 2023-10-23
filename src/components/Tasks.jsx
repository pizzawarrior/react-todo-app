import Task from './Task'

// We 'catch' the props as params here:
const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((task) => (
                // output a Component and pass in a task as a prop
                <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                />
            )
            )}
        </>
    )
}

export default Tasks
