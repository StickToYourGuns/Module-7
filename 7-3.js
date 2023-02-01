// Написать функцию, которая создает пустой объект, но без прототипа.

function createFuncWithoutProto() {
    let newEmptyObj = Object.create(null)
    return newEmptyObj;
  }
  
  console.log(createFuncWithoutProto());