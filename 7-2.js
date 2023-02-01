// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let anObj = {
    name: "Ivan Ivanov",
    age: 24,
    city: "Moscow",
    education: "bachelor",
    workExpYears: 3,
    position: "design_engineer",
  }
  
  let anStr = prompt("введите искомое свойство:")
  
  function checkMatches(object, string) {
    for (let key in anObj) {
      if ((key == anStr) || (anObj[key] == anStr)) {
        return true;
      } 
    } return false;
  }
  
  console.log(checkMatches(anObj, anStr));