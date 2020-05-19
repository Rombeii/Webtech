import React from 'react'
import catchStore from '../stores/CatchStore'
import fishermanStore from '../stores/FishermanStore'
import ListOfCatches from "./ListOfCatches";

class CatchesPage extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {catchesList : catchStore._catches,
                      filteredCatchesList: catchStore._catches,
                      specie:'',
                      weight:'',
                      weightFilterType:"eq",
                      caughtBy:'',
                      lake:'',
                      dateOfCatch:'',
                      dateOfCatchUntil:'',
                      dateOfCatchFilterType:"eq"};
        this.onChangeOfCatches = this.onChangeOfCatches.bind(this);
    }

    onChangeOfCatches(){
        this.setState({catchesList : catchStore._catches})
    }

    componentDidMount() {
        catchStore.addChangeListener(this.onChangeOfCatches);
    }

    componentWillUnmount() {
        catchStore.removeChangeListener(this.onChangeOfCatches);
    }

    resetFilter = () => {
        this.setState({
            filteredCatchesList: catchStore._catches,
            specie:'',
            weight:'',
            weightFilterType:"eq",
            caughtBy:'',
            lake:'',
            dateOfCatch:'',
            dateOfCatchUntil:'',
            dateOfCatchFilterType:"eq"});
    }

    filter = () => {
        let temp = this.state.catchesList
        //filter specie
        temp = temp.filter((catchItem) => {
            return catchItem.specie.toString().includes(this.state.specie)
        })
        //filter weight
        if(this.state.weight !== '') {
            switch (this.state.weightFilterType) {
                case "eq":
                    temp = temp.filter((catchItem) => {
                        return Number(catchItem.weight.match(/\d+/)[0]) === Number(this.state.weight)
                    })
                    break;
                case "gt":
                    temp = temp.filter((catchItem) => {
                        return Number(catchItem.weight.match(/\d+/)[0]) > Number(this.state.weight)
                    })
                    break;
                case "lt":
                    temp = temp.filter((catchItem) => {
                        return Number(catchItem.weight.match(/\d+/)[0]) < Number(this.state.weight)
                    })
                    break;
            }
        }
        //filter caught by
        temp = temp.filter((catchItem) => {
            return fishermanStore._fishermen[catchItem.fishermanId].name.toString().includes(this.state.caughtBy)
        })
        //filter lake
        temp = temp.filter((catchItem) => {
            return catchItem.location.lake.toString().includes(this.state.lake)
        })
        //filter date
        if(this.state.dateOfCatch !== '') {
            switch (this.state.dateOfCatchFilterType) {
                case "eq":
                    temp = temp.filter((catchItem) => {
                        return catchItem.dateOfCatch == this.state.dateOfCatch
                    })
                    break;
                case "gt":
                    temp = temp.filter((catchItem) => {
                        return catchItem.dateOfCatch > this.state.dateOfCatch
                    })
                    break;
                case "lt":
                    temp = temp.filter((catchItem) => {
                        return catchItem.dateOfCatch < this.state.dateOfCatch
                    })
                    break;
                case "bw":
                    temp = temp.filter((catchItem) => {
                        return catchItem.dateOfCatch > this.state.dateOfCatch && catchItem.dateOfCatch < this.state.dateOfCatchUntil
                    })
                    break;

            }
        }
        this.setState({
                filteredCatchesList: temp
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <table className="table table-bordered table-striped" width="75%">
                    <tbody>
                        <tr>
                            <th width="25%">Specie</th>
                            <th><input type="text"
                                       value={this.state.specie}
                                       onChange={(e)=>{
                                           this.setState({
                                               specie : e.target.value
                                           });
                                       }}/></th>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <th>
                                <select className="mr-2" value={this.state.weightFilterType} onChange={(e) => {
                                    this.setState({
                                        weightFilterType: e.target.value
                                    })}}>
                                    <option value="eq">Equals</option>
                                    <option value="gt">Greater than</option>
                                    <option value="lt">Lower than</option>
                                </select>
                                <input type="number"
                                       value={this.state.weight}
                                       onChange={(e)=>{
                                           let temp = e.target.value > 0 ? e.target.value : 0
                                           this.setState({
                                               weight : temp
                                           });
                                       }}/>
                            </th>

                        </tr>
                        <tr>
                            <th>Caught by</th>
                            <th><input type="text"
                                       value={this.state.caughtBy}
                                       onChange={(e)=>{
                                        this.setState({
                                            caughtBy: e.target.value
                                        });
                                    }}
                            /></th>
                        </tr>
                        <tr>
                            <th>Lake</th>
                            <th><input type="text"
                                       value={this.state.lake}
                                       onChange={(e)=>{
                                           this.setState({
                                               lake: e.target.value
                                           });
                                       }}
                            /></th>
                        </tr>
                        <tr>
                            <th>Date of catch</th>
                            <th> <select className="mr-2" value={this.state.dateOfCatchFilterType} onChange={(e) => {
                                this.setState({
                                    dateOfCatchFilterType: e.target.value
                                })}}>
                                <option value="eq">On</option>
                                <option value="gt">After</option>
                                <option value="lt">Before</option>
                                <option value="bw">Between</option>
                            </select>
                                <input type="date"
                                       value={this.state.dateOfCatch}
                                       onChange={(e)=>{
                                           this.setState({
                                               dateOfCatch: e.target.value
                                           });
                                       }}
                            />
                                {this.state.dateOfCatchFilterType ==="bw" ? <span> - <input type="date"
                                                                                   value={this.state.dateOfCatchUntil}
                                                                                   onChange={(e)=>{
                                                                                       this.setState({
                                                                                           dateOfCatchUntil: e.target.value
                                                                                       });
                                                                                   }}
                                /></span> : null}
                            </th>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button className="btn btn-info m-2" onClick={(this.filter)}>Filter</button>
                                <button className="btn btn-danger m-2" onClick={(this.resetFilter)}>Reset filter</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ListOfCatches catches={this.state.filteredCatchesList} />
            </div>
        );
    }
}

export default CatchesPage;