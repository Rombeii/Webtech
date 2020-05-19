import React from 'react'
import fishermanStore from '../stores/FishermanStore'
import ListOfFishermen from './ListOfFishermen'
import AddFisherman from './AddFisherman'
class FishermenPage extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.onChangeOfFishermen = this.onChangeOfFishermen.bind(this);
    }

    onChangeOfFishermen(){
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeOfFishermen);

    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeOfFishermen);
    }

    render() {
        return (
            <div className="container-fluid">
                <AddFisherman/>
                <ListOfFishermen/>
            </div>
        );
    }
}

export default FishermenPage;