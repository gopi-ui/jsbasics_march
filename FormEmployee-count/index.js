let employearray = [];
let count =document.getElementById("count");
count.innerHTML=`The total number of counts: ${employearray.length}`;

function employeDetails() {
    let Ename = document.getElementById("ename").value ;
    let Eemail = document.getElementById("eemail").value;
    let Eeducation = document.getElementById("eeducation").value;
    let Eaddres = document.getElementById("eaddress").value;
    let Edob = document.getElementById("edob").value;
    employearray.push({
        Name:Ename,
        Email:Eemail,
        Education:Eeducation,
        Adress:Eaddres,
        DoB: Edob

    });


checKforarray();
// employearray.length=0;

};


// let chekForNull = () =>{
//     let name = document.getElementById(" ").value ;

// }

function checKforarray() {
    let addData = document.getElementById("adddata")
    let secondDiv = document.createElement('div');
    secondDiv.className = "secondDiv"
    for (let i = 0; i < employearray.length; i++) {
        // let element = employearray[i];  // console.log(element);
        let firstDiv = document.createElement('div');
        firstDiv.className = "firstDiv"
        for(key in  employearray[i]){
        let creatdiv = document.createElement('p')

            creatdiv.className="newdiv";
            creatdiv.innerHTML= key +':' + employearray[i][key] + "<br>";
     
            firstDiv.appendChild(creatdiv);
            // console.log(firstDiv)
            
        } 
        secondDiv.appendChild(firstDiv)
        // console.log(addData);
        if(addData.hasChildNodes() && addData.lastElementChild.className === "secondDiv"){
                addData.removeChild(addData.lastElementChild);
        }
            addData.appendChild(secondDiv);

    }

}

let clearData = ()=>{
    
}