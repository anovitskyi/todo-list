import React from 'react';
import './index.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        text: 'Buy game'
      },
      {
        id: 2,
        text: 'Play the guitar'
      },
      {
        id: 3,
        text: 'Download music'
      }
    ]
  }

  render = () => {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <TodoList todoList={this.state.todos} todoDeleteHandler={this.deleteHandler}/>
        <AddTodo todoAddHandler={this.addHandler} />
      </div>
    );
  }

  deleteHandler = (id) => {
    let newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  }

  addHandler = (elem) => {
    const size = this.state.todos.length;
    let lastId = size > 0 ? this.state.todos[size - 1].id : 0; 
    let newTodos = [...this.state.todos, {
      id: lastId + 1,
      text: elem
    }];
    this.setState({
      todos: newTodos
    });
  }
}

export default App;
