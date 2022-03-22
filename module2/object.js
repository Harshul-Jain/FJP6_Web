// empty object
let obj ={};
console.log(obj);

let objHj={
    "Name":"Harshul",
    "Age": 45,
    phoneNo:8860503744,
    lastName:"Jain" // By default lastName is string,no need to put ""
}

console.log(objHj);

let capAmerica ={
    Name:'Steve ',
    Age:100,
    Friends:['Natasha','Thor','Tony','Bucky','Bruce'],
    address:{
        city:"Queens",
        state:'Haryana'
    },
    sayHi:function(){
        console.log("Cap America says Hi!!!!");
    }
}

//whole object
console.log(capAmerica);

//name of capAmerica
console.log(capAmerica.Name);
//Age of capAmerica
console.log(capAmerica.Age);
//friends of capAmerica
console.log(capAmerica.Friends);
//address object
console.log(capAmerica.address);

console.log(capAmerica.result);//gives undefined if key is not present

//city
console.log(capAmerica.address.city);
//paricular friend
console.log(capAmerica.Friends[0]);

//call fxn sayHi
console.log(capAmerica.sayHi());// it will also print the return value which is undefined in this case
//direct way without return value
capAmerica.sayHi();
