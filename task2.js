//part1
const color="Green"
switch(color){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Caution");
        break;
    case "Green":
        console.log("Go");
        break;    
    default:
        console.log("No action is defined for this color");       
        break;     
}



//part2
const matrix=[[3,4],[5,6]]
for (let i=0;i<matrix.length;i++){
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);  
    }   
}



//part3
const product={
    name:"book",
    price:10,
    inStock:true
}

for (let i in product){
    console.log(`${i}:`,product[i]);
}



//part4
const {name, price, inStock}=product


if (price<50 && inStock){
    console.log("available");
}else{
    console.log("unavailable");
}

