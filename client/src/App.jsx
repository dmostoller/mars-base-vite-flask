import { useEffect } from 'react'
import './App.css'
import ResourceChart from './ResourceChart'
import TasksList from './TasksList'
import { useResource } from "./resource.jsx";


function App() {
    const {resources, setResources} = useResource();

    useEffect(() => {
        fetch('http://127.0.0.1:5555/resources')
          .then((r) => r.json())
          .then((resources) => setResources(resources));
      }, []);

  return (
    <>
    <div className='font-mono'>
      <h1 className='font-bold text-secondary-500 text-4xl'>MARS BASE</h1>
      <div className="overflow-x-auto" style={{margin: "auto", marginBottom: "50px", marginTop: "25px"}}>
        <ResourceChart/>
     </div>
    <div>
        <TasksList/>
    </div>
      <div className="card">
            <form>
                <input className="focus:ring-2 focus:ring-secondary-500 focus:outline-none appearance-none w-full text-sm leading-6 text-black placeholder-secondary-500 rounded-md py-2 pl-10 ring-1 ring-secondary-500 shadow-sm" 
                    type="text" 
                    aria-label="game prompt" 
                    placeholder="Type here...">
                </input>
            </form>  
      </div>
      </div>
    </>
  )
}

export default App
