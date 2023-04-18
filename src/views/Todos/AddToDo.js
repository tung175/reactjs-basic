import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {

    state={
        title: ''
    }

    handleOnChangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () =>{
        if(!this.state.title){
            toast.error(`'Missing title's Todos`)
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }


    render() {

        let {title} = this.state
        return (
            <> 
                <div className="add-todo">
                    <input type="text" value={title} 
                        onChange={(event) => this.handleOnChangeTitle(event) }></input>
                    <button type="button" className="add"
                        onClick={() => this.handleAddTodo()}>add </button>
                </div>
            </>
        )
    }
}

export default AddToDo