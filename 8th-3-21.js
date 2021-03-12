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