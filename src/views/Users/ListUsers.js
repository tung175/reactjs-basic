import React from "react";
import axios from "axios";
import './ListUsers.scss'
import { withRouter } from "react-router";
class ListUsers extends React.Component{
    state= {
        listUsers: []
    }
    async componentDidMount(){
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res =>{
        //     console.log('Check data', res.data.data);
        // })

        let res = await axios.get('https://reqres.in/api/users?page=2')
        // console.log('Check data', res.data.data);

        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })


        
    }

    handleViewDeTailUser = (user) =>{
        this.props.history.push(`/user/${user.id}`)
    }

    render(){
        let {listUsers} = this.state
        return (
            <>
                <div className="list-users-container">
                    <div className="title">

                    </div>
                    
                    <div className="list-user-content">
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) =>{
                                return (
                                    <div className="child" key={item.id}
                                    onClick={() => this.handleViewDeTailUser(item)}>
                                        {index + 1} - {item.first_name} - {item.last_name}
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

export default withRouter(ListUsers)  