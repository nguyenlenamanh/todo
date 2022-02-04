import './App.css';
import { Component } from 'react';
import { CreateBox } from './components/create-box/create-box.component';
import { TaskList } from './components/task-list/task-list.component';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: []
    }
  }

  createTask = (name) => {
    
    const task = {
      id: this.findMaxId() + 1,
      name: name
    }

    this.setState({ tasks: [...this.state.tasks, task] })
  }

  removeTask = (id) => {
    const tasks = this.state.tasks.filter(p => p.id !== id)
    this.setState({tasks: tasks})
  }

  findMaxId = () => {
    return this.state.tasks.length == 0 ? 0 : Math.max(...this.state.tasks.map(task => task.id))
  }

  render(){
    return (
      <div className="App">
        <div id='wrapper'>
          <h1>Todo list</h1>
          <CreateBox createTask={this.createTask} />
          <TaskList tasks={this.state.tasks} removeTask={this.removeTask}/>
        </div>
      </div>
    )
  }
}

export default App;
