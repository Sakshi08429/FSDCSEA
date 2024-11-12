// console.log("hello world")
// let a=12
// console.log(a)
// if(a>10){
//    let a=30;
//     console.log("this given number is greater than 10")
// }
// console.log(a)
// let b ="sakshi"
// console.log(typeof b)
// console.log(b.slice(1,3))
// const arr =[1,2,3,4,5,6]
// console.log(arr.slice(0,3))
// console.log(arr)
// console.log("---------------------------------")
// console.log(arr.splice(2,1))
// console.log(arr)


// //some important method of the array
// console.log("------------------------------------------------")
// let res =[1,2,3,4,4,5,5,5,6,6,8]
// let res2 =[6,5,3,3,1,5]

// let add = [...res,...res2]
// console.log(add)

// str ="rudrapreettiwari"
// str1 ="sakshiChaudhary"

// if(str.length>str1.length){
//     console.log("rudra is greater than sakshi")
// }else{
//     console.log("sakshi is greater than rudra")
// }

// let d =function hello( str="preet"){
//    console.log("hello",str)
// }

// d("rudra")


// function sum(...num){
//     return num.reduce((a,c)=> a+c , 0)
// }


// console.log(sum(1,2,3,4,5,6))

// function greet(name,callback){

//     setTimeout(() => {
//         callback();
//     }, 2000);
//     console.log(name)
// }

// function say(){
//     console.log("hello")
// }

// greet("sakshi",say)

// const div=document.getElementsByClassName("parent");
// console.log(div)
// // div[0].innerText="Sakshi"
// div[0].innerHTML="<h2>ABES EC</h2>"
// const h1=document.createElement("h1");

// h1.innerText="element is created";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";

// div[0].appendChild(h1);
// console.log(h1);

// const img=Document.createElement('img');
// img.src="cat.jpg";

// img.setAttribute("height","400px");
// console.log(img);
// div[0].appendCChild(img);


// const button=document.getElementById("btn");
// console.log(button);

// const display=document.getElementById("disp");
// console.log(display);





// function getData(){
//     console.log("calling getData Function");
//     display.innerHTML="<h3 style=color:red>WELCOME TO CSE DEPARTMENT</h3>"
// }


// button.addEventListener("click",getData);

const promise1=new Promise(
(resolve,reject)=>{
    let a=12;
    if(a>10){
       resolve("value of a is resolved");
    }
    else{
       reject("a is rejected");
    }
}
);

promise1.then((msg)=>{console.log(msg)})
.catch(error=>{console.log(error)})
.finally(msg=>{console.log("All resources have been closed")});

const promise2=new Promise(
    (resolve,reject)=>{
        let a=Math.random()*100;
        if(a>0&&a<100){
           resolve("value of a is resolved");
        }
        else{
           reject("a is rejected");
        }
    }
    );

    promise2.then((msg)=>{console.log(msg)})
.catch(error=>{console.log(error)})
.finally(msg=>{console.log("All resources have been closed")});

const promise3=new Promise(
    (resolve,reject)=>{
        resolve({name:"Amit",branch:"CSE"});
    }
    );

const container=document.getElementById("product")
     fetch("https://dummyjson.com/products")
         .then(response=>response.json())
         .then(res =>{
            res.products.forEach(product => {
                const productdiv = document.createElement("div")
                productdiv.innerHTML=`<h3>Product ID :${product.id}</h3>
                                        <p>Product Title : ${product.title}`;
               container.appendChild(productdiv)
                
            });
         }).catch((error)=>"no data is receive")



