//object------------------------------------------------09/03/2021---------------------------
//key value pairs
// grouping of properties and function / 
//in generic term gouping of similar items 
//oops

let x= 1;
let y = 1 ; 
let radius = 1;

const circle = {
    radius:1, //any data type
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log('draw');
    }
};

// if a function is aprt of an object ,we call that as a method

console.log(circle.draw());

//or 
// factory function one way
function creatCircle(radius){
const circle = {                           //factory function 
    radius, //radius: radius,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log('draw');
    }
}
return circle;
};

// if a function is aprt of an object ,we call that as a method


console.log(creatCircle(1));
console.log(creatCircle(2));

// factory function another way

function creatCircle(radius){
    return {                           //factory function 
        radius, //radius: radius,
        location:{
            x:1,
            y:1
        },
        isVisible:true,
        draw:function(){              //or draw(){}
            console.log('draw');
        }
    }
    };
    //creating the object. here mycircle is objevt
    // const mycircle = createcircle(1)
    //console.log(mycircle.constructor) //////factory function on cosnole sceen i.e, mycircle
    
    creatCircle(1).draw();
    console.log(creatCircle(2));

    //paterns of creting objects - Factory Function
    //camel Noataion: oneTwoThrew - Factory function
    // pascal notaion: OneTwoThreeFour - Constructor Function


    //Constructor function

    function Circle(radius){
        this.radius = radius; //this basically cretas a refrnce to empty object 
        this.draw = function(){
            console.log('draw');
        }
    }

    const circle = new Circle(1);          //constroctor 
    console.log(circle.constructor);
    //----------------or----------------------------
    const circle = new Circle(1);
    console.log(circle);

//3 thikngs
//1. creats an empty object //  const x ={}
//2. set 'this' keyword to point to the new object 
//3. returns the object from the fucntion

//dynamic nature of the object

let circle={
    radius:1
}
circle = {}// we cannot reassign the pbject , but we can add delete modify the properties or finction 

circle.color='red';
delete circle.radius;
circle.color='blue';

console.log(circle);

//functions are objects

function Circle(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw');
    }
}


//arguement - radius      // definition - ` this.radius  // ananmous function 

const Circle1 = new Function('radius',`this.radius = radius;

this.draw = function () {
    console.log('draw');
}`
);


const circle = new Circle(1);

const another= new Circle1(1);

/////////////////// edifrent ways of calling function ()

//values and refrences types------------------------------------------------

//copy by values - prmitive data types

let x=10;
let y= x;

x=20;
console.log(x,y);        // 20 10

//copy by refrnce - objects     //adrress is transfered

let a = { value: 10 }
let b = a;

 console.log(a.value);
 console.log(b.value);       // 10  10
 
 //primitives are copied by their value 
 // objects are copied by their reference


 function increase (obj){
     return obj.value++;
 }
 console.log(increase(a));

 //enumerating propertirs of an object

 const circle = {
     radius:1,
     draw(){
         console.log('draw');
     }
 };

 for (let key in circle)
 if('radius' in circle)    //checking with key 
 console.log('YES')
 console.log(key , circle[key]);

 for(let key of Object.keys(circle)) //gives trhe values of properties of an object 
 console.log(key);

 for(let entry of Object.entries(circle)) // display properties and values in an array 
 console.log(entry);

//  if('radius' in circle)
//  console.log('YES')
// ------------------------------------------------

//cloning all the properites and functinons of an object to another

const circle = {
    radius:1,
    draw( ){
        console.log('draw');
    }
    
};

const person = {
    name:'rames'
};

//traditional way of cloning an object
const anotherCircle = {}; // create empty object


//cloning with key 
//for (let key in circle)
 //       anotherCircle[key]= circle[key];

 //copying each and every property individually
 //anotherCircle['radius] = circle['radius'];        //targert is anothercircle and circle is source !!! wher to clone 

        // console.log(anotherCircle);

        //const anotherCircle =Object.assign({},circle); //create empty and iterate
        //console.log(anotherCircle);

        //const anotherCircle =Object.assign({},circle,person); //create empty and iterate
        //console.log(anotherCircle);

        //clonong using object assign
        const anotherCircle = Object.assign({
            city:'Benagluru'
        },circle);
        console.log(anotherCircle);

        //spread Operator------------------------------------------------
        const anotherCircle = {...circle,...person}

        //-------------------------------------------------------------------------------------------------------

        //garbage collectton


        //js engine will GARBADGE COLLECTOR

        //automatically alocates and deallocates the memory,user we don't have control

        let circle = {}; //alcates the memory
        console.log(circle); //after dispalying deallocates the memory
        //-------------------------------------------------------------
        //math

        console.log(Math.floor(Math.random()));         // 0 or 1
        console.log(Math.round(1.9));                  //2 ,if 1.5 value = 1
        console.log(Math.max(1,2,3,));  //nad min

        //string 

        const randomTEXT ='aroha\'s property';  // escape character
        console.log(randomTEXT);

        const stirgObject = new String('h1')
        console.log( typeof stirgObject);


        const message = ' this is my first message'

        console.log(message)
        console.log(message[0]);
        console.log(message.length);
        console.log(message.includes('my'));
        console.log(message.startsWith('i'));
        
        console.log(message.endsWith('i'));
        console.log(message.toUpperCase());

        console.log(message.replace('this', 'that'));
        console.log(message.trim());
        console.log(message.split( ' '));

        //template literal---------------------------------------------

        // const message = 'this is my \n first message'
        // console.log(message) 

        let name = 'ramesh';

        const message2 = `hi ${name}, calulation ${2+3}`;

        console.log(message2);

        //date-----------------

        const date1 = new Date('jan 12 2021 09:00')
        console.log(date1);

        const date2 = new Date(2021,1,12,0);  // month starts from 0 tp 11 - snd parameter 
        console.log(date2);

        console.log(now.getDate());
        console.log(now.toD)


        //asignemnts
        //1) adress object with below prperties and create a function showAddress(address)
        //which display all the properties and the values 
        //street ,  city, zipcode 

        //2)   adress object by using factory and constructor Function

        //3) creatre a blog post object

        //title. body, autor, views, coments[authoe ,body], isLive