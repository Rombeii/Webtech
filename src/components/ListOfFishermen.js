import React from 'react'
import fishermanStore from '../stores/FishermanStore'
import {withRouter} from "react-router-dom";
class FishermenPage extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {fishermenlist : fishermanStore._fishermen};
        this.onChangeOfFishermen = this.onChangeOfFishermen.bind(this);
    }

    onChangeOfFishermen(){
        this.setState({fishermenlist : fishermanStore._fishermen})
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeOfFishermen);
        fishermanStore.emitChange();
    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeOfFishermen);
    }

    redirectToFisherman(id) {
        this.props.history.push("/details/" + id);
    }

    render() {

        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact information</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.fishermenlist.map((fisherman)=>{
                        return(
                            <tr key={fisherman.id}>
                                <td>{fisherman.name}</td>
                                <td>{fisherman.address}</td>
                                <td>{`email:${fisherman.contactInfo.email} phone number:${fisherman.contactInfo.phoneNumber}`}</td>
                                <td>
                                    <button
                                        className="btn btn-info"
                                        onClick={()=>{
                                            this.redirectToFisherman(fisherman.id)
                                        }}
                                    >Show more</button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default withRouter(FishermenPage);