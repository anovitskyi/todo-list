import React from 'react';

class AddTodo extends React.Component {
    render = () => <div>
        <form onSubmit={this.handleAdd}>
            <input type="text" id="addInp" />
        </form>
    </div>

    handleAdd = (event) => {
        event.preventDefault();
        let val = document.getElementById("addInp").value;
        this.props.todoAddHandler(val);
        document.getElementById("addInp").value = "";
    }
}

export default AddTodo;