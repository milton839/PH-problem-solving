function rotateLeft1(n, d) {
    let len = n.length;
    console.log(len);
    for(let i=0; i<d; i++){ 
        let temp = n[0];
        console.log(temp);
        for(let i=0; i< len; i++){
            n[i]=n[i+1];
        }
        n[len-1]=temp;
    }
    return n;
}

let n = [1,2,3,4,5];

let d = 4;
let output = rotateLeft1(n, d);
console.log(output);