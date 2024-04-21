import { useEffect, useState } from "react";
import { Progress } from "flowbite-react";


function ResourceChart () {
    const [resources, setResources] = useState([]);
    const color = "blue"
    useEffect(() => {
      fetch('http://127.0.0.1:5555/resources')
        .then((r) => r.json())
        .then((resources) => setResources(resources));
    }, []);

    const resourceList = resources.map((resource) => {
        // console.log(resource)
        return <Progress 
        progress={resource.quantity} 
        textLabelPosition="outside" 
        progressLabelPosition="inside" 
        textLabel={resource.name} size="lg" 
        labelProgress 
        labelText 
        color={resource.color} 
        />
    })

    return(
        <>
        {resourceList}
        </>
    )
}

export default ResourceChart