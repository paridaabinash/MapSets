// Problem 1:
// You are given a string (STR) of length N, consisting of only the 
// lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef


function uniqueLetter(str){

    let str1 = str.split("");
    let mySet = new Set(str1);
    let str2 = [...mySet];
    console.log(str1.join(" "))
    console.log(str2.join(" "));
  
  }
  
  uniqueLetter("abcadeecfb");
  

// Problem 2:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

let myMap = new Map();

function lettercount(str){
    let count = 0;
   str.split("").forEach(element => {

        if(myMap.has(element)==true){   

            count = myMap.get(element)+1;
            myMap.set(element,count);
        }
        else{
            myMap.set(element,1);
        }     
        
   });
}

lettercount("abcadeecfb");

for(let [key,val] of myMap.entries()){
    console.log(`${key}=${val}`);
}
