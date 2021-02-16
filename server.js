//Objects
/*
const obj = {
    name:'Pranav',
    age:21
}
obj.name = 'Sonu';// we can change key value of object in runtime
console.log(obj);

const obj = {
    name:'Peace',// we cant change whole object in runtime
}
*/


//Arrays -> DataStructure
/*
const arr = [
    {
    name:'Pranav',
    age:21
}
]
console.log(arr);
*/

//Functions
/*
//Simple function WithOut Parameter
function withoutparam() {
    console.log('This is My First Function');
}
//Simple function With Parameter
function withparam(val) {
    console.log(val);
}
//calling a function
withoutparam();
withparam();//this will show undefined
withparam('Hello');
*/


/*
//Fat Array Function Without Parameter
const withoutparam = () => {
    console.log('This is My First Fat array Function')
}
//Fat Array Function With Parameter
const withparam = (val) => {
    console.log(val);
}
withoutparam();
withparam();//this will show undefined
withparam('Hello');
*/

//function with Variables
const add = (a, b) => {
    let c = a + b;
    console.log(c);
}
add(1,1);
