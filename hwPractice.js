
/* problem:01|sum   Two no of Sum */

function sum(x,y){
    let total=0;
    
    total=x+y;
    return total;
}
let add=sum(5,9);
console.log(add);

/* Problem: 02|avg     */

function average(x,y,z){
   let avgtotal=0;
   avgtotal= (x+y+z)/3;
   return avgtotal;
}
avg=average(4,4,4);
console.log(avg);

/* Problem: 03|greater than */
function greaterThan(x,y)
{
    let num =0;
    if(x>y){
        num=true;
    }else{
        num=false;
    }
    return num;
}
greater=greaterThan(5,6);
console.log(greater);

/* Problem: 04|second largest */
 
 let nums=[4, 3, 5, 12, 9, 10, 14];
 
function secondLargest(nums){
   let largeNo=nums[0];
   let seclarge=0;
   for(let i=0; i<nums.length; i++){
     if(nums[i] > seclarge){
         if(nums[i]>largeNo){
         seclarge=largeNo;
         largeNo=nums[i];
         }else{
          seclarge=nums[i];
         }
     }
    
   }
   return seclarge;
}
console.log(secondLargest(nums));

/* Problem :05|containVowels  */
let str= 'alpha';
function containVowel(str){
    let bool=false;
    for(let i=0; i<str.length; i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            bool=true;
        }else{
            bool=false;
        }
    }
    return bool;
}
console.log(containVowel(str));

/* Problem : 06| Piglatin */
function piglatin(string){

   let words =string.split('');
   for(let i=0; i<words.length; i++){
       let letters=words[i].split('');
       let fLetter=letters.shift();
       letters.push(fLetter);
       letters.push('ay');
       words[i]=letters.join('');

   }
   return words.join('');

}
console.log(piglatin('good day'));

/* problem: 07| longestWord   */

let sentence='have you ever seen a penguion go to drink tea';
function largestWord(sentence){
    let wrds=sentence.split(' ');
    let largeword=0;
    for(let i=0; i<wrds.length;i++){
       if(wrds[i].length > largeword){
         //lword=wrds[i].length;
          largeword = wrds[i].length;
       }
    }
     return largeword;
 
}
console.log(largestWord(sentence)); 




