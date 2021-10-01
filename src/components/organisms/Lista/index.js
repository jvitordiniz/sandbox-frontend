import React from "react";
import {useQuery} from 'react-query';
import { listarTasks } from "../../../services/repositories/taskRepository";
import CustomCard from "../../molecules/Card";

const Tasks = () => {

  const { data, status } = useQuery('tasks', listarTasks)

  return(
    <div>
      <h1>Lista de Tasks</h1>
      {status === 'error' && (
        <div>Error fetching data</div>
      )}
      {status === 'loading' && (
        <div>Loading...</div>
      )}
      {status === 'success' && (
        <div style={{ height:'500px', overflowY: 'scroll', border:'1px'}}>
          {data.map(task => 
              <CustomCard key={task.id} data={task} />
            )
          }
        </div>
      )}

    </div>

  )
}

export default Tasks