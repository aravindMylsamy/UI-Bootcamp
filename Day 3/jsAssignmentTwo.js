const stringify = (object) => {
   
    if (typeof object == "string") return `"${object}"`;

    if (Array.isArray(object)) return `[${object}]`;
  
    if (typeof object !== "object") return `${object}`;
  
    var answer = [];

    for (const [key, value] of Object.entries(object)) {
        answer.push(`"${key}":${stringify(value)}`);
    }
  
    return `{${answer.join(",")}}`;
  };

  let bioData = {
    name: "Aravind M",
    age: 22,
    hobbies:['Music','Videos','Movies'],
    address:{
        street:'7th Street',
        state:'TN'
    }

  };

 