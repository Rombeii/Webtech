import dispatcher from '../AppDispatcher';

class FishermanActions {

    addFisherman(details, id){
        dispatcher.handleViewAction({
            command : 'ADD_FISHERMAN',
            details : details,
        });
    }
}

export default new FishermanActions();
