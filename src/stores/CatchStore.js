import EventEmitter from 'events';
import dispatcher from '../AppDispatcher';
const axios = require('axios');

class CatchStore extends EventEmitter{

    _catches = []

    getCatches() {
        axios.get('http://localhost:3001/catches')
            .then((response)=>{this._catches.push(...response.data);
                                this.emitChange();
                                console.log("getCatches")})
            .catch((err)=>{console.log('problem\n'+err)});
    }



    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change', callback);
    }

    constructor() {
        super();
        this.getCatches();
    }

    getCatchesForFishermanId(fishermanId) {
        console.log(fishermanId)
        return this._catches.filter((catchItem) => {
            return catchItem.fishermanId == fishermanId;
        })
    }
}

const catchStore = new CatchStore();

dispatcher.register((action) =>{
    if(action.payload.command === 'ADD_CATCH'){
        let temp = action.payload.details
        let id = action.payload.id

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const catchItem = {
            dateOfCatch: temp.dateOfCatch,
            specie: temp.specie,
            weight: temp.weight + " kg",
            location: {
                lake: temp.lake,
                coordinates: temp.coordinates,
            },
            id: catchStore._catches.length,
            fishermanId: id
        }
        console.log(catchItem)
        catchStore._catches.push(catchItem)
        axios.post('http://localhost:3001/catches', catchItem, config)
            .then((response)=>{console.log(response.data)})
            .catch((err)=>{console.log(err.response)});
        catchStore.emitChange()
    }
});


export default catchStore;
