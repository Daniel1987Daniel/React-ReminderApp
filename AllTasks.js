import "./AllTasks.css"
import data from "./data"
import { useState } from "react"

const AllTasks = () => {

  const [myTask, setMyTask] = useState(data)

  const tasksHandler = (idecko) => {
    const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id !== idecko
    })

    setMyTask(filteredTasks)
  }

  const clearAll = () => {
    setMyTask([])
  }

  return (
    <div>
      {
       myTask.map((oneTask) => {
       const {id, name} = oneTask

        return (
          <div className="one-task" key={id}>
            <h1>{name}</h1>
            <button type="button" onClick={() => {tasksHandler(id)}}>Clear order</button>            
          </div>
          )
        })
      }
      <button type="button" onClick={clearAll} className="clear-all">Clear all</button>
    </div>
  )
}

export default AllTasks