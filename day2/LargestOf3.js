let a=10;
let b=2;
let c=12;

function LargestOf3(a,b,c){
    if(a>b && a>c){
        return "a is greater";
    }
    else if(b>c){
        return "b is greater";
    }
    else{
        return "c is greater";
    }
}
console.log(LargestOf3(a,b,c));