import { useEffect, useState } from "react";
import { Table, Button } from "flowbite-react";
import Task from "./Task";
import { useResource } from "./resource";

function TasksList () {
    const [tasks, setTasks] = useState([]);
    const {setResources} = useResource();
    
    useEffect(() => {
      fetch('http://127.0.0.1:5555/tasks')
        .then((r) => r.json())
        .then((tasks) => setTasks(tasks));
    }, []);

    const deleteTask = (deleted_task_id) => {
    setTasks(tasks => tasks.filter((task) => task.id !== deleted_task_id))
    fetch('http://127.0.0.1:5555/resources')
    .then((r) => r.json())
    .then((resources) => setResources(resources));
     // console.log(deleted_comment_id)
    }

    const refreshTasks = (e) => {
        fetch('http://127.0.0.1:5555/refresh_tasks')
        .then((r) => r.json())
        .then((tasks) => setTasks(tasks));
        fetch('http://127.0.0.1:5555/resources')
        .then((r) => r.json())
        .then((resources) => setResources(resources));
    };
    

    const tasksList = tasks.map((task) => {
        // console.log(task)
        return (
            <Task
            id={task.id}
            key={task.id}
            name={task.name}
            resource={task.resource.name}
            description={task.description}
            reward={task.reward}
            onDeleteTask={deleteTask}
            />
        )
    })

    return (
        <>
           <div className="overflow-x-auto" style={{overflowY:"auto", height: "300px"}}>
            <Table hoverable>
                <Table.Head >
                <Table.HeadCell className="bg-gray-700 dark:border-gray-700 dark:bg-gray-800"><p className="text-xs text-secondary-500">Task</p></Table.HeadCell>
                <Table.HeadCell className=" bg-gray-700 dark:border-gray-700 dark:bg-gray-800"><p className="text-xs text-secondary-500">Description</p></Table.HeadCell>
                <Table.HeadCell className=" bg-gray-700 dark:border-gray-700 dark:bg-gray-800"><p className="text-xs text-secondary-500">Reward</p></Table.HeadCell>
                <Table.HeadCell className="p-2 bg-gray-700 dark:border-gray-700 dark:bg-gray-800"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                {tasksList}
                </Table.Body>
            </Table>
            </div>
            <div className="flex flex-wrap gap-2 m-4 justify-center" >
            <Button.Group>
                <Button gradientMonochrome="teal">Log New Task</Button>
                <Button onClick={refreshTasks} gradientMonochrome="teal">Refresh Task List</Button>
            </Button.Group>
            </div>
        </>
    )

}

export default TasksList