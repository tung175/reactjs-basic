import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        ListToDos:[
            {id: 'todo1', title: 'homework'},
            {id: 'todo2', title: 'makingwebsite'},
            {id: 'todo3', title: 'fixbug'}
        ],
        editTodo: {

        }
    }

    addNewTodo = (Todo) =>{
        this.setState({
            ListToDos: [...this.state.ListToDos, Todo]
        })
        toast.success('Success')
    }

    handleDeleteTodo = (todo) => {
        // console.log('>>>> Check ID:', todo);
        let currentTodos = this.state.ListToDos
        currentTodos = currentTodos.filter(iteam => iteam.id !== todo.id)
        this.setState({
            ListToDos: currentTodos
        })
    }

    handleEditTodo = (todo) =>{
        let {ListToDos, editTodo} = this.state
        let isEmpty = Object.keys(editTodo).length === 0

        //save
        if (isEmpty ===false && editTodo.id === todo.id){

            let ListToDoCopy = [...ListToDos]
            //Find index of specific object using findIndex method.    
            let objIndex = ListToDoCopy.findIndex((iteam => iteam.id === todo.id));

            ListToDoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: ListToDoCopy,
                editTodo: {}
            })
            toast.success('Update todo success')
            return
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {

        let {ListToDos, editTodo} = this.state
        let isEmpty = Object.keys(editTodo).length === 0
        return (
            
            <> 
            <p>
                Simple TODO Apps with React.js
            </p>
            <div className="list-todo-contener">
                <AddToDo
                addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {ListToDos && ListToDos.length > 0 &&
                        ListToDos.map((iteam, index) => {
                            return (
                                <div className="todo-child" key={iteam.id}>
                                    {isEmpty === true ?
                                    <span> {index + 1} - {iteam.title}</span>
                                    :
                                    <>
                                        { editTodo.id === iteam.id ?
                                        <span> {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)}/></span>
                                        :
                                        <span> {index + 1} - {iteam.title}</span>
                                        }
                                    </>
                                    }
                                    <button className="edit" 
                                    onClick={() => this.handleEditTodo(iteam)}
                                    >
                                        {isEmpty === false && editTodo.id === iteam.id ?
                                            'Save' : 'Edit'
                                        }
                                            

                                    </button>
                                    <button onClick={() => this.handleDeleteTodo(iteam)}>Delete</button>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
            </div>  
            </>
        )
    }
}

export default ListToDo