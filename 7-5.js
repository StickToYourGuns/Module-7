// Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor(powerConsumption){
      this.powerConsumption = powerConsumption;
      this.rechargable = true;
    }
    getName = function(){
      console.log(`The name of this ${this.type} is ${this.model}`);
    }
  
    chargingOn = function(){
    console.log(`This ${this.model} is on charging now`);
    }
  
    turnOn = function(){
    console.log(`This ${this.model} is turned on`);
    }
  
    turnOff = function(){
    console.log(`This ${this.model} is turned off`);
    }
  }
  
  class Appliance extends Device {
    constructor(brand, type, model, color, powerConsumption){
      super(powerConsumption);
      this.brand = brand;
      this.type = type;
      this.model = model;
      this.color = color;
    }
  }
  
  class PC extends Device {
    constructor(brand, type, model, color, powerConsumption){
      super(powerConsumption);
      this.brand = brand;
      this.type = type;
      this.model = model;
      this.color = color;
    }
  }
  
  class Acessories extends Device {
    constructor(brand, type, model, color, powerConsumption){
      super(powerConsumption);
      this.brand = brand;
      this.type = type;
      this.model = model;
      this.color = color;
    }
  }
  
  class Phone extends Device {
    constructor(brand, type, model, memory, color, powerConsumption){
      super(powerConsumption);
      this.brand = brand;
      this.type = type;
      this.model = model;
      this.memory = memory;
      this.color = color;
    }
  }
  
  Appliance.prototype = new Device();
  PC.prototype = new Device();
  Acessories.prototype = new Device();
  Phone.prototype = new Device();
  
  
  Appliance.prototype.scareTheDog = function(){
    console.log(`Order 66 activated. Charlie, my lovely dog, where are you? Here's Johnny jajaja!`)
  }
  
  let vacuumCleaner = new Appliance("xiaomi", "vacuumCleaner", "miRobotVacuum", "white", 40);
  
  let desktop = new PC("various", "desktop", "StationaryPC", "white", 600);
  
  let laptop = new PC("asus", "laptop", "zenbook", "white", 70);
  
  let headphones = new Acessories("apple", "inEarHeadphones", "airPods", "white", 15);
  
  let iPhone = new Phone("apple", "phone", "13mini", "256", "black", 25);
  
  desktop.graphicCard = "geforce3070";
  laptop.screenInch = "14";
  vacuumCleaner.dogsMainEnemy = true;
  
  iPhone.turnOnMusic = function(){
    console.log(`wanna listen to "Recommended for today" from Spotify?`)
  };
  
  vacuumCleaner.cleaningOn = function(){
    console.log(`Cleaning started`)
  };
  
  iPhone.chargingOn();
  headphones.chargingOn();
  vacuumCleaner.scareTheDog();
  
  iPhone.turnOnMusic();
  vacuumCleaner.cleaningOn();
  
  laptop.turnOn();
  desktop.turnOn();
  headphones.getName();
  
  let powerCount = vacuumCleaner.powerConsumption + desktop.powerConsumption + laptop.powerConsumption +  headphones.powerConsumption +  iPhone.powerConsumption;
  
  console.log(vacuumCleaner);
  console.log(desktop);
  console.log(laptop);
  console.log(headphones);
  console.log(iPhone);
  
  console.log(powerCount);