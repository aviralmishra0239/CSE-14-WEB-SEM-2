function diamond(n){

for(let i=1;i<=n;i++){

let space=" ".repeat(n-i);
let star="*".repeat(2*i-1);

console.log(space+star);

}

for(let i=n-1;i>=1;i--){

let space=" ".repeat(n-i);
let star="*".repeat(2*i-1);

console.log(space+star);

}

}

diamond(4);