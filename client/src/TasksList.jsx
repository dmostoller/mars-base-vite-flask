import { useEffect, useState } from "react";
import { Checkbox, Table, Button } from "flowbite-react";


function TasksList () {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
      fetch('http://127.0.0.1:5555/tasks')
        .then((r) => r.json())
        .then((tasks) => setTasks(tasks));
    }, []);

    const tasksList = tasks.map((task) => {
        // console.log(task)
        return (
            <Table.Row className="bg-gray-700 hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-2"><Checkbox /></Table.Cell>
                <Table.Cell><p className="text-xs text-secondary-500">{task.name}</p></Table.Cell>
                <Table.Cell><p className="text-xs text-secondary-500">{task.description}</p></Table.Cell>
                <Table.Cell><p className="text-xs text-secondary-500">{task.reward}</p></Table.Cell>
            </Table.Row>
        )
    })

    return (
        <>
           <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head >
                <Table.HeadCell className="p-2 bg-gray-700 dark:border-gray-700 dark:bg-gray-800">
                </Table.HeadCell>
                <Table.HeadCell className="bg-gray-700 dark:border-gray-700 dark:bg-gray-800"><p className="text-xs text-secondary-500">Task</p></Table.HeadCell>
                <Table.HeadCell className=" bg-gray-700 dark:border-gray-700 dark:bg-gray-800"><p className="text-xs text-secondary-500">Description</p></Table.HeadCell>
                <Table.HeadCell className=" bg-gray-700 dark:border-gray-700 dark:bg-gray-800"><p className="text-xs text-secondary-500">Reward</p></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                {tasksList}
                </Table.Body>
            </Table>
            </div>
            <div className="flex flex-wrap gap-2 m-4 justify-center" >
            <Button.Group>
                <Button gradientMonochrome="teal">Perform Task</Button>
                <Button gradientMonochrome="teal">Log New Task</Button>
                <Button gradientMonochrome="teal">Refresh Task List</Button>
            </Button.Group>
            </div>
        </>
    )

}

export default TasksList