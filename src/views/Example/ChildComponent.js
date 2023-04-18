import React from "react";

class ChildComponents extends React.Component {

    state = {
        showJob: false
    }

    handleOnClickShowHide = (status) => {
        this.setState({
            // showJob: status
            showJob: !this.state.showJob
        })
    }

    handleOnclickDelete = (job) =>{
        // alert('Click me')
        console.log('handleclickDelete:', job);
        this.props.deleteAJob(job)
    }

    render() {
        let { firstName, age, address, arrJob } = this.props
        let { showJob } = this.state
        let check = showJob === true ? 'showJob = true' : 'showJob = felse'
        console.log('check showjob:', check);
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleOnClickShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">Props Child Component: {firstName} - {age} - {address}

                            {
                                arrJob.map((iteam, index) => {
                                    return (
                                        <div key={iteam.id}>
                                            {iteam.title} - {iteam.salary}$ 
                                            <></> <span onClick={()=> this.handleOnclickDelete(iteam)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleOnClickShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}

export default ChildComponents