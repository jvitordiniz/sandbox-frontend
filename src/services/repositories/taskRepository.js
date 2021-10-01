import api from '../api';

export const cadastrarTask = async(data) => {
  const url = '/tasks'
  return api.post(url, {
    title: data.title,
    description: data.description
  })  
} 

export const listarTasks = async () =>{
  const url = '/tasks'
  return api.get(url)
}