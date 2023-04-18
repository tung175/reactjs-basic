import React from "react";
import ChildComponents from "./ChildComponent";
import AddComponents from "./AddComponent";

class MyComponents extends React.Component {

    state = {
        name: 'Kyu',
        firstName: '',
        lastName: '',
        arrJob: [
            {id: '1', title: 'Developer', salary: '1000'},
            {id: '2', title: 'Tester', salary: '100'},
            {id: '3', title: 'Project manager', salary: '100'},
        ]
    }

    //example
    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value,
            
        })
    }

    handleClickButton = () =>{
        alert('Click me')
    }

    //example forms

    handlSubmit = (event) =>{
        event.preventDefault()
        console.log('>>>> Check data input:', this.state);
    }

    addNewJob = (job) =>{
        console.log('>>>> check parent ', job);
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteAJob = (job) =>{
        let currenJobs = this.state.arrJob
        currenJobs = currenJobs.filter(iteam => iteam.id !== job.id)
        this.setState({
            arrJob: currenJobs
        })
    }

    render() {
        return (
            <> 
                <AddComponents
                    addNewJob = {this.addNewJob}
                />

                <ChildComponents
                    firstName = {this.state.firstName}
                    age = {'22'}
                    address = {'Ha Noi'}
                    arrJob = {this.state.arrJob}
                    deleteAJob = {this.deleteAJob}
                />















            {/* <div className="first">hello my Component,
                <input value={this.state.name} type="text" 
                    onChange={(event) => this.handleOnChangeName(event)}>

                </input> my name is {this.state.name}</div>
            <div className="second">fragment react</div>
            <div className="third">
                <button onClick={() => this.handleClickButton()}>click me</button>
            </div> */}
            </>
        )
    }
}

export default MyComponents