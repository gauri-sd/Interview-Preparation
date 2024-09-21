function flattenObject(json) {
    let obj = {};

    for (let i in json) {
        if (typeof json[i] === 'object' && !Array.isArray(json[i]) && json[i] !== null) {
            let flatObject = flattenObject(json[i]);
            for (let j in flatObject) {
                obj[i + '.' + j] = flatObject[j];
            }
        } else {
            obj[i] = json[i];
        }
    }
    return obj;
}

const json = {
    name: "John",
    address: {
        city: "New York",
        zip: {
            code: "10001",
            plus4: "1234",
            person: {
                name: "Gauri",
                age: 25
            }
        }
    },
    age: 30,
    hobbies: ['Painting', 'Singing']
};

const flatJson = flattenObject(json);
console.log(flatJson);
