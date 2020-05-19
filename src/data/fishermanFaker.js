const faker = require('faker');
const fs = require('fs');

generateFisherMan = () => {
    return {
        name  : `${faker.name.firstName()} ${faker.name.lastName()}`,
        address : `${faker.address.country()} ${faker.address.city()} ${faker.address.streetAddress()}`,
        contactInfo: {email:faker.internet.email(),
                      phoneNumber: faker.phone.phoneNumber()},
        equipment: faker.lorem.words(),
        bait: faker.lorem.word(),
        fishingPole: faker.lorem.word(),
        preferredTech: faker.lorem.paragraph(),
        certificateNumber: faker.random.uuid()
    };
};
let fisherman = [];
for(let i=0; i < 50; i++){
    fisherman.push(generateFisherMan());
}
fisherman = fisherman.map((fisherman,index)=>{
    fisherman.id = index;
    return fisherman;
});

const fish = ['Albacore', 'Amberjack', 'Atlantic Bonito', 'Bank Sea Bass', 'Barracuda', 'Bigeye Tuna', 'Blackfin Tuna', 'Black Drum', 'Black Sea Bass', 'Blacktip Shark', 'Bluefish', 'Bluefin Tuna', 'Blue Marlin', 'Blueline Tilefish', 'Butterfish', 'Cobia', 'Croaker', 'Dolphin', 'Flounder', 'Gag', 'Grouper', 'Gray Triggerfish', 'Gray Trout', 'Hammerhead', 'Hickory Shad', 'Hogfish', 'Jumping Mullet', 'King Mackerel', 'Knobbed Porgy', 'Lizardfish', 'Little Tunny', 'Mako Shark', 'Menhaden', 'Northern Puffer', 'Oyster', 'Toadfish', 'Pigfish', 'Pinfish', 'Pompano', 'Red Drum', 'Red Grouper', 'Red Snapper', 'Sailfish', 'Scamp', 'Sea Mullet', 'Searobin', 'Sheepshead', 'Silver Perch', 'Silver Snapper', 'Skate', 'Skipjack Tuna', 'Spadefish', 'Spanish Mackerel', 'Speckled Hind', 'Spottail Pinfish', 'Spot', 'Spotted Trout', 'Stingray', 'Striped Bass', 'Swordfish', 'Tarpon', 'Tiger Shark', 'Vermillion Snapper', 'Wahoo', 'White Marlin', 'White Grunt', 'Yellowfin Tuna', 'Yellowedge Grouper'];
let catchId = -1;


generateCatch = (fishermanId) =>{
    catchId +=1;
    return {
        dateOfCatch: faker.date.past().toISOString().split('T')[0],
        specie: fish[Math.floor(Math.random() * fish.length)],
        weight: `${Math.floor(Math.random() * 10) + 1} kg`,
        location: {lake: `Lake ${faker.lorem.word()}`,
                   coordinates: `(${faker.address.latitude()},${faker.address.longitude()})`},
        id: catchId,
        fishermanId: fishermanId
    };
};

let catches = []

for (var index in fisherman) {
    var numberOfCatches = Math.floor(Math.random() * 20) + 1
    for (catchIndex = 0; catchIndex < numberOfCatches; catchIndex++) {
        catches.push(generateCatch(fisherman[index].id))
    }
}

fs.writeFile(
    'data/database.fake.json',
    JSON.stringify({fishermen: fisherman, catches: catches}),
    (err)=>{console.log(err)}
);
