class Plant {

    constructor(name) {
    
    this.name = name;
    
    }
    
    plantType(plantType) {
    
    console.log(`The ${this.name} plant is a '${plantType}'`);
    
    }
    
    }
    
    
    
    let tulsi = new Plant("Tulsi");
    
    tulsi.plantType("shrub");
    
    let papaya = new Plant("Papaya");
    console.log(tulsi.__proto__);

console.log(Object.getPrototypeOf(tulsi) === Object.getPrototypeOf(papaya));