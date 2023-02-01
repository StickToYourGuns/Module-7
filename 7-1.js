// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const litigator2 = {
    firstName: "John",
    lastName: "Doe",
  }
  
  const witness = Object.create(litigator2);
  
  witness.realFirstName = "Denis";
  witness.realLastName = "Petrov";
  
  for(let key in witness) {
    if (witness.hasOwnProperty(key)){
      console.log(key + ": " +  witness[key]);
    }
  }