// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

function Device(rechargable, powerConsumtion){
    this.rechargable = rechargable;
    this.powerConsumtion = powerConsumtion;
  }
  
  
  function Appliance(brand, type, model, color, powerConsumption){
    this.brand = brand;
    this.type = type;
    this.model = model;
    this.color = color;
    this.powerConsumption = powerConsumption;
  }
  
  function PC(brand, type, model, color, powerConsumption){
    this.brand = brand;
    this.type = type;
    this.model = model;
    this.color = color;
    this.powerConsumption = powerConsumption;
  }
  
  function Acessories(brand, type, model, color, powerConsumption){
    this.brand = brand;
    this.type = type;
    this.model = model;
    this.color = color;
    this.powerConsumption = powerConsumption;
  }
  
  function Phone(brand, type, model, memory, color, powerConsumption){
    this.brand = brand;
    this.type = type;
    this.model = model;
    this.memory = memory;
    this.color = color;
    this.powerConsumption = powerConsumption;
  }
  
  Appliance.prototype = new Device();
  PC.prototype = new Device();
  Acessories.prototype = new Device();
  Phone.prototype = new Device();
  
  
  Device.prototype.getName = function(){
      console.log(`The name of this ${this.type} is ${this.model}`);
  }
  
  Device.prototype.chargingOn = function(){
    console.log(`This ${this.model} is on charging now`);
  }
  
  Device.prototype.turnOn = function(){
    console.log(`This ${this.model} is turned on`);
  }
  
  Device.prototype.turnOff = function(){
    console.log(`This ${this.model} is turned off`);
  }
  
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