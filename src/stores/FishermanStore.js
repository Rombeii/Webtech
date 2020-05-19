import EventEmitter from 'events';
import dispatcher from '../AppDispatcher';
const axios = require('axios');

class FishermanStore extends EventEmitter{

    _fishermen = []

    getFishermen() {
        axios.get('http://localhost:3001/fishermen')
            .then((response)=>{this._fishermen.push(...response.data);
                                this.emitChange();
                                console.log("getFishermen")})
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
        this.getFishermen();
    }
}

const fishermanStore = new FishermanStore();

dispatcher.register((action) =>{
    if(action.payload.command === 'ADD_FISHERMAN'){
        let temp = action.payload.details

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const fisherman = {
            name: temp.name,
            address: temp.address,
            contactInfo: {
                email: temp.email,
                phoneNumber: temp.phoneNumber
            },
            equipment: temp.equipment,
            bait: temp.bait,
            fishingPole: temp.fishingPole,
            preferredTech: temp.preferredTech,
            certificateNumber: temp.certificateNumber,
            id: fishermanStore._fishermen.length,
        }
        fishermanStore._fishermen.push(fisherman)
        axios.post('http://localhost:3001/fishermen', fisherman, config)
            .then((response)=>{console.log(response.data)})
            .catch((err)=>{console.log(err.response)});
        fishermanStore.emitChange()
    }
});


export default fishermanStore;
