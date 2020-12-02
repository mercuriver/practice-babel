const p = Promise.resolve(10);
const obj = {
    a: 10,
    a: 20,
    a: 30,
};
const arr = Object.values(obj);
const exist = arr.includes(20);