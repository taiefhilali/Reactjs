let lastt = 0;
const Tab = [{name: "amani", age: 23}, {name: "ibtihel", age:23} ,{name: "asma", age:23}, {name: "farah", age:23}];

Tab.push({name: "siwar", age: 24});
Tab.unshift({name: "taief", age: 22}); 

Tab.forEach(item => {
  item.id = ++lastt; 
});


 const searchById = (id) => {
  return Tab.find(item => item.id === id);
}

const result = searchById(3);
console.log(result);




