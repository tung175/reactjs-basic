import React from "react";
import Color from "../HOC/Color";
import img from "../../assets/image/daifaceap.jpg"
import './home.scss'
import { connect } from "react-redux";
class Home extends React.Component{
    handleDeleteUserRedux = (users) =>{
        console.log("check delete", users);
        this.props.deleteUserRedux(users)
    }
    handleCreateUserRedux = () =>{
        // console.log("check Create user", users);
        this.props.addUserRedux()
    }
    render(){
        console.log("check data redux: ", this.props.dataRedux);
        let listUserRedux = this.props.dataRedux
        return (
            <>
                <div>
                    Hello homepage with React
                </div>
                <img className="img" src={img}></img>

                <div>
                    {listUserRedux && listUserRedux.length > 0 &&
                    
                    listUserRedux.map((item, index) =>{
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                <span onClick={() => this.handleDeleteUserRedux(item)}>X</span>
                            </div>
                        ) 
                    })
                    }
                    <button onClick={() => this.handleCreateUserRedux()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        dataRedux: state.users
    } 
}

const mapDispathToProps = (dispath) =>{
    return{
        deleteUserRedux: (userDelete) =>dispath({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispath({type: 'CREATE_USER'}),
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Color(Home))