import React from 'react'
import fishermanStore from '../stores/FishermanStore'

class ListOfCatches extends React.Component{

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Specie</th>
                    <th>Weight</th>
                    <th>Caught By</th>
                    <th>Location</th>
                    <th>Date of catch</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.catches.map((catchesItem)=>{
                        return(
                            <tr key={catchesItem.id}>
                                <td>{catchesItem.specie}</td>
                                <td>{catchesItem.weight}</td>
                                <td>{fishermanStore._fishermen[catchesItem.fishermanId].name}</td>
                                <td>{`${catchesItem.location.lake}, ${catchesItem.location.coordinates}`}</td>
                                <td>{catchesItem.dateOfCatch}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default ListOfCatches;