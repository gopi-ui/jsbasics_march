////////----------------------------------------------10-03-2021----------------------

//functionare objects

function Circle(radius){
    this.radius=radius;
    this.draw = function (){
        console.log('draw')
    }
}
//constructoe property will convert functions into objects internally

//circle()

// Circle.call({},1)//single paramter
// Circle.apply({},1,2) //
// Circle.call({},1,2,3)
 //or 
//const another = Circle(1);

//object equaality

function Address(street,city,pincode){
    this.street= street;
    this.city=city;
    this.pincode=pincode;
}

let addres1= new Address('a','b','c');
let addres2 = new Address('a', 'b','c');
let addres3 = new Address('a', 'd','c');
let addres4 = addres1;

function areEqual(obj1,obj2){
    return obj1.street === obj2.street && obj1.city === obj2.city && obj1.pincode === obj2.pincode;
}//value 

console.log(areEqual(addres1, addres3));

function areSame(obj1,obj2){
    return obj1 ===obj2;          //cpmare loactions
}//checks for refrnce value 10010 to 1011
console.log(areSame(addres1,addres3)); //only adres 1 and adres 4 s [pointing to same value ]



///////
// arrays - object
//list of valeus

// opeartins -------------------                  
// add a new element (s)
// find elements
// remove elements(s)
// split the array
// combine the arrays


// object operations
// clconing
// crus opertion
// companred

const numbers= [2,3];
number= []; // cannot reassign due to const keyword but can add/modify/delete elemets
//add elemts at the beging of the array
numbers.unshift(1);
console.log(number)    //ad 1 
//add element at end of the aRRAY 

number.push(5) //add 5 at end

//add elemt at the middle of the array
//numbers.splice(startingposition,deleteecunt,itmes)

number.splice(2,2,'a');  //[2,3,'A']
console.log(number);


//FINDING ELEMTS

const ele = [1,2,3,4,5,6];

console.log(numbers.indexOf(3)); //if the elemts exists, it gives index else it will display -1

const numbers2= [1,2,3,1,4];
console.log(numbers.lastIndexOf(1)); // check for duplaictes array elemets indide array elmentes else -1;

console.log(numbers2.indexOf(1) !== -1)///true if a thN FALSE  ////true or falseeee
 

console.log(numbers2.includes(1));   //same as above


console.log(numbers2.indexOf(1,2));  //duplicate value 
console.log(numbers2.indexOf(4,1));  //(serch elemet , index of)//duplicate value // inex elemet is  included counted while findind  
//the first occurrence of the number 4  in a string, starting the search at position 1:  // count value is 4

//finding elemts -refernce types 

const courses = [                //this is array of object 
    {id: 1, name:'a'},
    {id: 2, name : 'b'},
];


console.log(couses.includes({id:1, name: 'a'})); ///false    herer adress is located not the value 

//arguments object has a difrnt memry location compated to the object present in cpouse array


//finding the index  of array of object 

const course = cousess.find(function(course){              //find method will accept call back function
    return course.name == 'a';
});                                         //finding the ondes of array of object 
console.log(course);  // if ''a' is not their or to check 'xyz' than it is 'undefined'


//in arrow function

const course = courses.find ((obj) => {
    return course.name == 'a';
});


//
const course = courses.find(obj => obj.name=='a'
);


//////Removing elements

const numbers = [ 1,2,3,4];

//remove elemts beging of the array 

const first = number.shift();  //removes first element 
console.log('removes', first);

//remove elemts end of the array 

const first = number.pop();  //removes last  element 
console.log('removes', first);     

// remove elemets from the middle elemets

//number.splice(index, numberoflemetstobedelete)
const first = number.splice(1,2);  //removes last  element 
console.log('removes', first);

//emptying an array

let numbers = [1,2,3,4]

let another= number;
another.pop();

console.log(another);
console.log(numbers);

//

let numbers = [1,2,3,4]
let another= numbers;
another=[];


console.log(another);     //[]
console.log(numbers);  //[1234]
//

let numbers= [1,2,3,4] //const its not working
numbers= [];                               //asigmmrt to vonst is not emptying
console.log(numbers);

// solution 2- using length onporstor
//best solution

let numbers = [1,2,3,4,]
let another = numbers;
//number.length = 0;
//another.length = 0;

console.log(another);


//solution 3 -  using splice methd

//number.splice(0);

//soluton using pop method - not recomende

while(another.length > 0)
    another.pop();

    console.log(another);


