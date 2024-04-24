import { createContext, useContext, useState } from "react";

//1. create context object
const ResourceContext = createContext();

//2. create the context provider (quasi-component)
function ResourceProvider({ children }) {

    const [resources, setResources] = useState([])

    return (
        <ResourceContext.Provider value={{resources, setResources}}>
            {children}
        </ResourceContext.Provider>
    )
} 

const useResource = () => {
    const context = useContext(ResourceContext)
    if (!context) {
        throw new Error("useResource must be used within a ResourceProvider")
    }
    return context
}
//3. finally, export the context the provider

export { useResource, ResourceContext, ResourceProvider }



////METHOD TWO - CUSTOM HOOK