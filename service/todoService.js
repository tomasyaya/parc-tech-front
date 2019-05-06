import axios from 'axios';

class TodoService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    });
  }

  getTodos = async () => {
    try {
      const { data } = await this.api.get(`/todos`)
      return data
    } catch(err) {
      console.log(err)
    }
  }
 
  createTodo = (body) => {

    return this.api.post(`/todos/`, body)
      .then(({data}) => data)
  }

  deleteTodo = (id) => {
    return this.api.delete(`/todos/${id}`)
      .then(({data}) => data)
  }
  
  doneTodo = (id, body) => {
    return this.api.put(`/todos/${id}`, body)
      .then(({data}) => data)
  }
}

const todoService = new TodoService();
export default todoService;