import React from 'react'
import fishermanStore from '../stores/FishermanStore'
import catchStore from '../stores/CatchStore'
import ListOfCatches from "./ListOfCatches";
import FisherDetails from "./FisherDetails";
import AddCatch from "./AddCatch";

class FisherPage extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {fisherman: null,
                      catches: null};
        this.onChangeOfFishermen = this.onChangeOfFishermen.bind(this);
        this.onChangeOfCatches = this.onChangeOfCatches.bind(this);
    }

    onChangeOfFishermen(){
        const {match: {params}} = this.props;
        this.setState({fisherman : fishermanStore._fishermen[params.id]})
    }

    onChangeOfCatches(){
        const {match: {params}} = this.props;
        this.setState({catches: catchStore.getCatchesForFishermanId(params.id)})
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeOfFishermen);
        catchStore.addChangeListener(this.onChangeOfCatches);

        fishermanStore.emitChange();
        catchStore.emitChange();

        const {match: {params}} = this.props;
        this.setState({fisherman : fishermanStore._fishermen[params.id],
            catches: catchStore.getCatchesForFishermanId(params.id)})
    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeOfFishermen);
        catchStore.removeChangeListener(this.onChangeOfCatches);
    }

    renderPage() {
        return (
            <div className="container-fluid">
                <FisherDetails fisherman={this.state.fisherman}/>
                <AddCatch fishermanId={this.state.fisherman.id}/>
                <ListOfCatches catches={this.state.catches}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.fisherman != null ? this.renderPage() : null}
            </div>
        );
    }
}

export default FisherPage;