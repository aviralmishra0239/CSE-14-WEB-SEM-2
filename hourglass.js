function hourglass(n){

for(let i=n;i>=1;i--){

let space=" ".repeat(n-i);
let star="*".repeat(2*i-1);

console.log(space+star);

}

for(let i=2;i<=n;i++){

let space=" ".repeat(n-i);
let star="*".repeat(2*i-1);

console.log(space+star);

}

}

hourglass(3);