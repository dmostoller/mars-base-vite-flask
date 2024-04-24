import { Checkbox, Table, Button } from "flowbite-react";

function Task ({name, id, description, reward, onDeleteTask, resource}) {

    const performTask = (e) => {
        fetch(`http://127.0.0.1:5555/perform_task/${id}`,{
          method:"DELETE"
        })
        .then(() => {
          onDeleteTask(id)
        })
    }
    return (
        <>
            <Table.Row className="bg-gray-700 hover:bg-gray-900 border-gray-700 dark:bg-gray-800">
                <Table.Cell><p className="text-xs text-secondary-500">{name}</p></Table.Cell>
                <Table.Cell><p className="text-xs text-secondary-500">{description}</p></Table.Cell>
                <Table.Cell><p className="text-xs text-secondary-500">+{reward}% {resource}</p></Table.Cell>
                <Table.Cell className="p-2">
                    <Button onClick={performTask} size="xs" gradientMonochrome="teal">Perform Task</Button>
                </Table.Cell>
            </Table.Row>
        </>
    )
}

export default Task