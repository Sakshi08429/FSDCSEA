function sum(num1,num2){
return num1+num2;
}
// const result=sum(8,13)
// console.log(result)

// export
const multiplication=(num1,num2)=>{
    return num1*num2;
}

const obj={
    sum:sum,
    multiplication:multiplication
}
module.exports=obj;