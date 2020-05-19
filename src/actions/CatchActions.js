import dispatcher from '../AppDispatcher';

class CatchActions {

    addCatch(details, id){
        dispatcher.handleViewAction({
            command : 'ADD_CATCH',
            details : details,
            id      : id
        });
    }
}

export default new CatchActions();
