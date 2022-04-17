function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
   
    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);

      if(isFunction(val1,val2)){
          return false;
      }
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2  
      ) {
        return false;
      }
    }
    return true;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

function isFunction(val1, val2){
   let value1 = val1 != null && typeof val1 === 'function';
   let value2 = val2 != null && typeof val2 === 'function';
   return value1 || value2;
}

let obj1 = {
    a: 1, 
    b: 2, 
    c: {
        d: "hello"
    }
}

let obj2 = {
    a: 1,
    b: 2, 
    c: {
        d: "hello"
    }
}
 console.log(deepEqual(obj1, obj2));