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
 
  createTodo = async (body) => {
    try {
      const { data } = await this.api.post('/todos', body)
      return data
    } catch(err) {
      console.log(err)
    }
  }

  deleteTodo = async (id) => {
    try {
      const data = this.api.delete(`/todos/${id}`)
      return data 
    } catch(err) {
      console.log(err)
    }
  }
  
  doneTodo = (id) => {
    return this.api.put(`/todos/${id}`)
      .then(({data}) => data)
  }
}

const todoService = new TodoService();
export default todoService;