import { Progress } from "flowbite-react";


function ResourceChart () {


    return(
        <>
        <Progress progress={50} textLabelPosition="outside" progressLabelPosition="inside" textLabel="Water" size="lg" labelProgress labelText color="blue" />
        <Progress progress={65} textLabelPosition="outside" progressLabelPosition="inside" textLabel="Fuel" size="lg" labelProgress labelText color="red" />
        <Progress progress={70}  textLabelPosition="outside" progressLabelPosition="inside" textLabel="Food" size="lg" labelProgress labelText color="green" />
        <Progress progress={100}  textLabelPosition="outside" progressLabelPosition="inside" textLabel="Air" size="lg" labelProgress labelText color="yellow" />
        </>
    )
}

export default ResourceChart