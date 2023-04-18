import React from "react";

class AddComponents extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    //example forms
    handleOnChangeFirstName = (event) =>{
        this.setState({
            title: event.target.value,
        })
    }

    handleOnChangeLastName = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handlSubmit = (event) =>{
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('Missing required params')
            
        }
        console.log('>>>> Check data input:', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
    }

    render() {
        return (
            <> 
                <form action="/action_page.php">
                    <label for="fname">Job's title:</label>
                    <br />
                    <input
                        type="text" 
                        value={this.state.title}
                        onChange={(event) => this.handleOnChangeFirstName(event)}
                    />
                    <br />
                    <label for="lname">Salary:</label>
                    <br />
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event) => this.handleOnChangeLastName(event)}
                    />
                    <br /><br />
                    <input
                        type="button" 
                        value='submit'
                        onClick={(event) => this.handlSubmit(event)}
                    />
                </form> 
            </>
        )
    }
}

export default AddComponents