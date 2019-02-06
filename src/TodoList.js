import React from 'react';

class TodoList extends React.Component {
    render = () => <table>
        <tbody>
            {this.props.todoList.map(todo =>
                <tr key={"tr" + todo.id}>
                    <td id={"td" + todo.id} onClick={() => this.crossTodo(todo.id)}>{todo.id} {todo.text}</td>
                    <td><button onClick={() => this.props.todoDeleteHandler(todo.id)}>-</button></td>
                </tr>
            )}
        </tbody>
    </table>

    crossTodo = (id) => {
        let doc = document.getElementById("td" + id);
        if (doc.innerHTML === doc.innerHTML.strike()) {
            doc.innerHTML = doc.innerHTML;
        } else {
            let strokeText = doc.innerHTML.strike();
            doc.innerHTML = strokeText;
        }
    }
}

export default TodoList;