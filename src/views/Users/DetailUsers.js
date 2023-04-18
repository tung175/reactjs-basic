import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
class DetailUsers extends React.Component{
    state ={
        user: {}
    }
    async componentDidMount() {
        if(this.props.match  && this.props.match.params){
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log("check res", res);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : []
            })
        }
       
    }

    handleBackButton = () =>{
        this.props.history.push('/User')
    }
    render(){
        let {user} = this.state
        let isEmpty = Object.keys(user).length === 0
        return (
            <>
                <div>hello world from detail user with id: {this.props.match.params.id}</div>
                {isEmpty === false &&
                    <>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUsers)