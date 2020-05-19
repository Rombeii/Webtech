import React from 'react'

class FisherDetails extends React.Component{

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        let fisher = this.props.fisherman
        return (

            <table className="table table-bordered table-striped">
                <tbody>
                   <tr>
                       <th>Name</th>
                       <th>{fisher.name}</th>
                   </tr>
                    <tr>
                        <th>Address</th>
                        <th>{fisher.address}</th>
                    </tr>
                    <tr>
                        <th>Contact info</th>
                        <th>Email: {fisher.contactInfo.email}<br/>Phone number: {fisher.contactInfo.phoneNumber}</th>
                    </tr>
                    <tr>
                        <th>Equipment</th>
                        <th>{fisher.equipment}</th>
                    </tr>
                    <tr>
                        <th>Bait</th>
                        <th>{fisher.bait}</th>
                    </tr>
                    <tr>
                        <th>Fishing pole</th>
                        <th>{fisher.fishingPole}</th>
                    </tr>
                    <tr>
                        <th>Preferred technique</th>
                        <th>{fisher.preferredTech}</th>
                    </tr>
                    <tr>
                        <th>Certificate number</th>
                        <th>{fisher.certificateNumber}</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FisherDetails;