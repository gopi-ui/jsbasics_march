// javscript

//* 1) let and const *//
let  name;
console.log(name); //undefined    name should initialize value

let name='gopi';
console.log(name); // output: gopi

//const

const a;
a=10;   //Uncaught SyntaxError: miissing initialize in const declaration  

const a=10; // ptints =10

// overwriteen  of var and let

let name='gopi';
let name='jp';
console.log(name); // Identifier 'name' has already been declared

// diffrent var

console.log(x);
var x= 5;          output : //undefined
console.log(x);             //5

//Data types;
//1) primitive data type
// 2)referrence type

// types if primitive Datatype
//----------------------------------------------------------------
// 1)String
// 2)Number
// 3)Boolean
// 4)undefined
// 5)null


let name ='gopi';  //sting literal
let age=30; //number
let isApprove=true; //boolean
let firstName=undefined; //isundefined
let lastName= null; //clear the value of number

//------------------------------------------------------------
let name = true ; //or // 1    // dynamically typed

 //static typed
//                  string name = 'ramesh';


let phone=988885205
console.log(phone); 
console.log(typeof(phone));

//---------------------------------------
//reference typed
//Object

let person ={
    name:'gopi',
    city:'bengaluru',
    phone:'99988745'
}
console.log(person);

//or to change the property of objevt

person.name='jeevan';
person.city='chennai'

//1)access the properties using dot noatation----------------

console.log(person.name);


// nested object ------------------
let person ={
    name:'gopi',
    adress:{
        city:'bengaluru',
        state:'karnataka',
    },
    phone:'99988745'
}

console.log(person.adress.city)
//2) access the properties using Bracket Notation

console.log(person['name']);
console.log(adress['city']['state']);        //currying


//-----------------------------------------------------------------------------------------------------
//first arithmantic operator


// -----------------------------
// x+y is an expression,produce the values , which will have both opernad and operator
// x and y are operands and + is operore

console.log(x+Y);
console.log(x-Y);
console.log(x*Y);
console.log(x/Y);
console.log(x%Y);
console.log(x**Y);  //exponentiation : x to poweer of y


//-----------------------------------
// INCREMENT & DECREMENT
let x=10;
let y=3;


console.log(++x); //INCREMETN FIRST AND THEN DISPLAY   11
 x=x+1;

 console.log(x++);//DISPAY FIRDT SND THE OONCREMENT    11
x=null
x=x+1;
////////////////////x+=1;  OR X=X+1


 //DECREMENT(--)
 console.log(--x); // DECREMENT FIRST AND THEN DISPLAY //   9

 console.log(x--); // DECREMENT FIRST AND THEN DISPLAY     8


 console.log(x*=5); OR / OR %

 // -------------------------------------------------------------------------------
 //COMAPRISON operator
 //1) RELAIONAL
console.log(x>0);  //OUTPUT WILL BOLEN
x<0;             //<=0,>=0

//2) EQUALITY

console.log(x===1);
console.LOG(x !==1)

//STRICT EQUALITY operator (TYPE + VALUE) OPERATOR 
console.LOG(1===1)                 //TRUE
console.LOG('1'===1)         ///FALSE

//LOSE EQULAITY OPERATOR

console.log(1=='1') //CONVERTS THE RIGHT SIDE VALUE('1') TO NUMBER  // FALSE
console.log(true==1);//CONVEERTS THE RIGHT SIDE VALUE (1)TO BOLLEN         //TRUE
console.log(true==0); //    FALSE

// ----------------------------------------------------------------------------------------------------------------
//TERNARY OPERATOR

let x=1;

//IF A CUSTOMER HAS MORE THAN 100 PONITS
//THEY ARE GOLD CUSTOMER
// OTHERWISEY THEY ARE SILVER  CUSTOMER


let typeofCustomer = points > 100? 'GOLD' : 'SILVER' ;

//CONDITION? STATEMENT1 : STATEMENT2
console.LOG(typeofCustomer)



if(points >100) {
    console.log('GOLD')
}
else
{
    console.log('SILVER')
}
//----------------------------------------------------------------------
//LOGICAL OPERTORTS 

//USED TO  MAKE THR DECISIOON BASED ON MULTIPLE CONDITION

//LOGICAL AND (&&) -  RETURN IF BOTH OPERANDS ARE TRUE
console.log(true && false)
console.log(true && true)

let hignincome= true;
let  goodcreditscore = true;
let eligibleforLoan = hignincome && goodcreditscore;

console.log('elgible fro laon',elgibleona)

//LOGICAL AND (&&) -  RETURN if one of the  OPERANDS ARE TRUE
// ------------------------------------------------------------------------------
//logical not(!)

let hignincome = false;
let goodcreditScore = false;

let eligiblefoLoan = hignincome || goodcreditScore;
console.log('Elifible',eligiblefoLoan); 

//constarditcing

let applicationRefused = !eligiblefoLoan
console.log('Application Refused', applocatojnRefused);

//resultsd of logical exprression cannot  be alwys boolan

//falsy (not a flase) values 


console.log(false || true);
console.log(false || 'rames');



//     most of falsy value     
//undefined
//NULL , // 0  // false //'' // NaN -NOT A NUMBER - SPECIAL VALUE. THATS DOESN'T PRODUCE ANY VALIABLE NUMBER 

//ANYTHING THST IS NOT FALSY --> TRUTHY


NIVETHA
CONSOL.log(false && ++x);
CONSOLOE.LOG(x)                   //false
                                   //1
console.log(false || 1 || 2);         //short-circuiting
console.log(true || 1 || 2);     


let suercolor= 'red';
let usercolor= NAN; //     or undefined 
let defultcolor = 'blue';

let cuerentcolor = userColr || defultcolor;    // red // blue

console.log(curentColor);

//  -------------------------------------------------------------------------
//bitwise operator

//1=00000001 - 128 64 32 16 4 2 1
// 2=00000010             1 and compare
// or = 00000011 - 3
// AND = 00000000 - 0

console.log(1|2);  //bitwise or 
console.log(1& 2);
//----------------------------------
//accesss control systems
//read ,write , execute

//rwx  - rrda write execute  -4,2,1
// 4-00000100 - read only permission
// 2-00000010 - wrie ""--------""
// 1-00000001 - execute only permission
// 4,2 - 000000110  - read and write permisono
// 4,2,1 - 000000111 - read,write, & execute permsion 

 const readPermison = 0;
const writePermsion = 4;
const executePermsion = 4;

var mypermison = mypermison | readPermison  | writePermsion;
console.log(mypermison)    ///aded  or operation  6

let message = (mypermison & readPermison)? 'yes' : 'no';   //no
let message = (mypermison & readPermison)? 'yes' : 'no'; //yes

console.log(message);


//----------------------------------
//operator Prcedence

//Prcedence of operator

let x = 2 + 3*4;
console.log(x);

//()
//*
// /
// 

let x = (1 == true)
console.log(x)


// ----------------------------------------------------------08/03/2021---------------------------------
//if Hour is b/w 6am to 1pm :good morning
// if Hor id b/w 13 pm to 6pm :good afternoon
//oyehrwise :good Evening



//iftheir is only one statment
//if(conditon)
//


// if their is multiple statemnts
//if(conditon){
    //statments
//}

let hour =19;
if(hour >=6 && hour<12)
console.log('good morning');
else if(hour >=12 && hour <18)
console.log('good afternoon');
else
console.log('good evening');

// switch case statemrnts
//rool of thr curent user;
//chrck whether the current logged in user is guest ,moderaste or admin

let role= 'guest';

switch (role){
    case 'guest':
        console.log('guest user');
        break;
    case 'moderator':
        console.log('moderator user');

        break;
    default:
        console.log('Admin user');
}


// same program in if else  

if(role === 'guest') console.log('guest user');
else if(role=== 'moderator') console.log('moderator iser');
else console.log('unknown/Guest User');

//lopps


for (let i=0;i<=10;i++)
 if(i%2 ===0 ) console.log('evcen numbers',i);

 //print even number in reverse order 
 for(let i=10;i>=0;i--)
 if(i% 2 ===0 )consol.log('even  umber in revser order',i);

 //while(consdtion)  statement {} -multpe statemets
 // the conditon will be evaluated . if that conditon is true then the control goes inside 
 let i=0;
 while(i<=5){
     if(i%2 === 0) console.log(i);
     i++;
 }

 //do while
// alwys execute the block of code at least once even if the conditon is false

//for..in

const person={
    name:'ramesh',
    phone:987481615
}


for(let key in person)//key variable will hold thr property of an objevt
consol.log(key,person[key]);


//for(let <key> in <object>)
const colours = ['red','green','blue'];

for (let index in colours)
console.log(index,colours[index]);


//for...of it used to loop thriugh ARRAY VALUES AND INDEXES

for(color of colours)
console.log(color)


for(obj of person)
console.log(obj);       //

//BREAK

let i=0;
while (i<=10){
    if(i==5)
    break;

    console.log(i);
    i++;
}


//continue- jump to the begining of thre lopp and strts executing 

while(i<=10){
    if(i % 2 ===0){
        i++;
        continue;
    }

    console.log(i);
    i++;
}
//is maxmin progrma----------------------
function maxmin(a,b){
 if(a<=b)
 console.log('maximum')
 else console.log('minimum')
}
maxmin(10,20)

//or 
function max(a,b){
    return (a > b) ? a: b;
}
console.log(max(5,8))

//or 
function max(a,b){
    if (a>b) return a;
    else return b;
}
console.log(max(5,8))

//islandscape(width,legnth)----------------------
function isLandscape(w,h) {
    if (w>h) return true;
    else return false;

}
console.log(isLandscape(100,200))
//or
function isLandscape(width,height){
    return (width>height);
}console.log(isLandscape(500,100))


//fizzbuzz
// divisible by 3 => display fizz
// divisible by 3 => display buzz
// divisible by 3 & 5  => display fizzbuzz
// not divisible by 3 & 5  => display the Input
// not a number => display 'not a number'



function fizzBuzz(){
    if(num % 3 ===0 && num % 5 ===0) console.log('fizzbuzz');
    if(num % 3 != 0 && num % 5 !=0) console.log(`$num`);
    else if (num % 5) console.log('buzz');
    else if (num % 3) console.log('Fizz');
    else if (typeof num != 'number') console.log('not a number')
}
fizzBuzz(14);



//4
//demerit points 

//speed limit=70 diaply message 'ok'
//5 -> 1 point
// 10 -> 2 points
// math.floor()
// 12 points - License suspended

function checkSpeed(speed){
    if(speed <=70 )
    console.log('ok')
    else{
        const points = Math.floor((speed -70 )/5);
        if(points>= 12)
        console.log('licensed Suspende');
        else 
        console.log('points:', points)
    }
}
checkSpeed(75);


//optimaization of code 
let speedLimit = 70;
let kmPerpoint = 5;
let maxPoint = 12;

function checkSpeed(speed){
    if(speed <=speedLimit + kmPerpoint ){
    console.log('ok');
    return;
    }
        const points = Math.floor((speed -speedLimit )/kmPerpoint);
        if(points>= maxPoint)
        console.log('licensed Suspende');
        else 
        console.log('points:', points)
}

//-------------------------------------------------------------

function showNumbers (num){
    for (num ;num>0;num--){
        if(num % 2 ===0 )
        console.log(num,+'is even')
        else
        console.log(num,+'is even') 

           
          
    }

}
showNumber(10)


//optimization of code
function showNumbers (num){
    for(let i=0;i<=limts;i++){
        const message=(i%2===0)? 'odd' :'even';
        console.log(i,message);
    }
}

//6 program
//count truthy values from a array

const array=[0,null,undefined,false,'',2,3];

console.log(countTruthy(array));

function countTruthy(array){
    let count=0;
    for (let value of array)
    if(value)
        count++;
        return count;
};

// 7 program
//string propertis

//showProperties(object)

const movie= {
    tittle:'a',
    releseofferYear: 2018,
    rating:4.5,
    direction:' b'
}

 showProperties(movie)
function showProperties(obj){
    for ( let key in obj){
        if(typeof obj[key]==='string')
        console.log(key,obj[key]);
    }

}


//8
//sum of all the multplies of 3 and 5 
//multplies of three 3: 3.6.9

console.log(sum(10));

function sum(limit){
    let sum =0;
    for(let i=0; i<=limit; i++)
    if(i % 3 === 0 || i % 5 === 0)
    sum =sum + i;

    return sum;
}

//9
//caluculating the grade of student 
const marks=[80,80,50]
// average 


//average 1-59:f
//average 60-69:D

//average 70-79:c

//average 80-89:B
//average 90-100:A

gradesAverage(100);
function gradesAverage(score){
    //for(let score);
    //let grade;

    switch(true) {
      case (score <= 100 && score >= 90):
        grade = 'A';
          break;
      case (score <= 89 && score >= 80):
        grade = 'B';
           break;
      case (score <= 79 && score >= 70):
        grade = 'C';
           break;
         case (score <= 69 && score >= 60):
            grade = 'D';
           break;
      case (score <= 59 && score >= 0):
        grade = 'F';
          break;
  
      case (score > 100 && score < 0):
        grade = 'INVALID SCORE';
          break; 
  
      default:
        return 'INVALID SCORE';
    }
    
    var last_digit = score%10;
    if(last_digit <=2 && last_digit >= 0 && score != 100){
        grade+='-';
    }
    else if((last_digit <=9 && last_digit >= 7) || score == 100){
        grade+='+';
    }
  
    return grade;
  };
  
  console.log(myGrading(91));
  console.log(myGrading(75));
  console.log(myGrading(100));



//-------------------------------------------or--------------
const array= [88,89,86,75,65,60];
let  sum=0;
function grade(){
    
    for(let value of array){
        sum+=value; //index
    }
    let average = sum /(array.length);
        if (average>=1 && average<=59) 
        console.log("grade : F");
        else if(average>=60 && average<=69) console.log("grade : D");
        else if(average>=70 && average<=79) console.log("grade : C");
        else if(average>=80 && average<=89) console.log("grade : B");
        else if(average>=90 && average<=99) console.log("grade : A");
        else if (average>=99 && average<=100) console.log("grade : S");

}
grade();



//10 display stars  after accepting an number 
//showStars(10);

showStars(10);
function showStars(rows){
    for (let row=1; row<= rows;row++){

    let pattern='';
    for (i = 0;i<row;i++)
    pattern +='*';
    console.log(pattern);
    }
}


//11
//prime Numbers
//const number = parseInt(prompt("Enter a positive number: "));


showPrime(15);

function showPrime(number){
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
}

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


    //----------------------------------------------------------------11-03-2021-------------------------

    //combining and slicing array

    const a=[1,2,3]
    const b=[4,5,6]

    const combined = b.concat(a);
    console.log(combined);


    //slicing 
    // 1st  way pf slicng 
    const slice = combined.slice(2,4);            //combined slice (start .finish -1)
    console.log(slice);                            //1256

    //2nd way of slicing
    const slice = combined.slice(2);            
    console.log(slice);

    //3rd esy of slcing 

    const slice = combined.slice();
    console.log(slice)

    //both the concate and slice does the same thing on primitive data types 
    //btoh the aarrays are copied by values;

    const first = [{id : 1}];
    const second = [4,5,6];

    const combined = first.concat(second);
    first[0].id = 10;

     console.log(first);                    //objects are copied by refrence 
    console.log(combined);

// 4th way ******************************
    const a=[1,2,3]
   ; const b=[4,5,6]

    const combine = [... first, ...second];

    console.log(combined);  
    //or
    const copy = [...combined]
    console.log(copy)

    ////////////////////////////iterating throuh array

    const number = [1,2,3];

    //one way 
    for ( let number of numbers)
    console.log(numbers);

    //two way
    numbers.forEach(function(number){
    console.log(numbers);
    });

    // using arrow function

    numbers.forEach(number => console.log(number));

    numbers.forEach((number,index) => console.log(index, number));

    //joingig an array

    const numbers = [1,2,3];
    const joined = numbers.join(',');  //returns string

    console.log(joined);

    const meeasge =  ' this is my first meesage';
    const parts =  message.split(' ');  //return an array
    console.log(parts);


//slug
//creating-araays-in-javascript

const combined =  parts.join('-');
console.log(combined);

//sorting array
const numbers = [3,2,1];

const sorted = numbers.sort() //default is ascending order [123]
console.log(sorted);

const reversed = numbers.reverse() //descending order
console.log(reversed);

const course = [
    {id:1, name: 'nodejs'},
    {id:1, name: 'javascript'}
];

const sortedcourses = course.sort(
    function(a,b){
        const nameA= a.name.toUpperCase();
        const nmaeB = b.name.toUpperCase();
        if(nameA < nmaeB) return -1;
        if(nameA > nmaeB) return  1;
        return 0;
    }
);

console.log(sortedcourses);
