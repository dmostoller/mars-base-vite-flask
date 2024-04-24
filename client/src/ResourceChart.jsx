import { Progress } from "flowbite-react";
// import { Progress } from "@material-tailwind/react";

import { useResource } from "./resource.jsx";

  import Chart from "react-apexcharts";
  
function ResourceChart () {
    const {resources} = useResource();    


    const resourceList = resources.map((resource) => {
        // console.log(resource)
        return <div key={resource.id} style={{width: "15vw"}}><Progress 
        progress={resource.quantity} 
        textLabelPosition="outside" 
        progressLabelPosition="inside" 
        textLabel={resource.name} 
        size="xl" 
        labelProgress 
        labelText
        color={resource.color} 
        /></div>
    // return <div style={{width: "100px"}}><Progress value={resource.quantity} size="lg" label={resource.name} color={resource.color}  /></div>
    
    })

    return(
        <>
        <div className="flex w-full gap-2" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
        {/* <div className="flex w-full flex-col gap-4"> */}
        {resourceList}
        </div>
        </>
    )
}

export default ResourceChart