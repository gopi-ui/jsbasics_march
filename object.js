let address={
    street:1880,
    city:'bangarpet',
    pincode:560004,
    showAddress: function(){
        for(let key in address)
        console.log(key+address[key]);
    }
        
};

address.showAddress();


//assignments 2-----------
function firstAddress(street,city,pincode){
    const address = {
        street,
        city,
        zipcode,
        showAddress:function(){
            for(let key in address)
            console.log(key+" ;"+address[key]);
        }
    }
    return address;
};

const mainAdress=firstAddress('6 cross','Benagluru',563114);
mainAdress.showAddress();

//assignments 3----------------constructor function
function Address(street,city,pincode){
        this.street= street;
        this.city=city;
        this.pincode=pincode;
        this.showAddress=function(){
            for(let key in address)
            console.log(key+" ;"+address[key]);
        }
};

const mainAdress=firstAddress('6 cross','Benagluru',563114);
mainAdress.showAddress();

//assignemnts 4 

// function blogSpot(){
//     const blog = {
//         title = 'gopi',
//         body = 'helllo hi welcome',
//         author = 'tochidhu gichidhu',
//         views = 'good',
//         comments = {
//             author=,
//             body=,
//         },
//         isLive = {};
//         blog.isLive

//     }
// }

function Blog(title,body,author,views,coments,isLive){
    return 
        this.title= title;
        this.body= body;
        this.author= author;
        this.views= views;
        this.comments= {author,body};
        this.isLive= isLive;

}
const blogspot=new Blog('6','cross' ,'Benagluru',563114);
blogspot.Blog();