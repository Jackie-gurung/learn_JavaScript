// ERROR HANDLING 
// try{
//     // REFERENCE ERROR 
//     // myFunction();
//     // type error 
//     // null.myFunction();
//     // syntax error 
//     eval("happy building");

// }catch(e){
//     eval();
//     // console.log(e.message);
//     // console.log(e);
//     // console.log("its null")
// }
// // myFunction();
// // console.log("program continues");

// REGULAR EXPRESSION 

// let re;
// re = /hello/;

// i = case insensative 
// g = global search 

// METHOD OF REGULAR EXPRESSIONS 
// exec() - return result in array or null 
// const result = re.exec('hello world hello'); 

// test() - return boolean value 
// const result = re.test("hi Hello my name is jamyang gelek.");

//  match() - retutn result in array 
// const str = 'hello  there hello';
// const result = str.match(re);

// search() - return index of first match if not return -1 
// const str = ' my name is hello jackie ';
// const result = str.search(re);

// replace() - return new string with match 
// const str = 'hello my name is jackie ';
// const newStr = str.replace(re,'hi');

// console.log(newStr); 

///////////////////////////////////////////////////////////////////////////
let re;
re = /hello/;

// Literal characters 
re = /hello/i; //i:case insensative

// meta character 
re = /^h/i;         // must start with 
re = /lhow  a$/;    //must end with
re = /^hello$/i;      //start and end with
re = /h.llo/i;      // matches any one character
re = /h*llo/;       //matches any number of character
re = /ya?e?k/;      //optional character 
re = /ya?e?k\?/;      //Escape character 

// bracket [] - character sets 
re = /gr[ae]y/i;    //must be an a or e 
re = /gr[^ae]y/i;   //anything  else a or e
re = /[A-Z]ey/;    //anything uppercase A-Z
re = /[a-z]ey/;    //anything lowercase A-Z
re = /[A-Z]ey/i;    //anything uppercase/lowercase A-Z
re  = /[0-9]ey/;    //any digit
re = /[0-9][0-9]ey/; // any two digits

// braces {} - quantifiers 
re = /hel{2}o/i;    //must occur {n} times
re = /hel{2,4}o/i;  //must occur n times in the range
re = /hel{2,}/i;    //must occur atleast 2 times

// parenthesis grouping 
re = /([0-9]x){3}/; //elements within parenthesis occur {n} times 

// shorthand character classes 
re = /\w/;  //word character - alphanumeric 
re = /\w+/;  //word character(one) or more
re = /\W/;  // NON-word character(one)+ more
re = /\d/;  //match any digit
re = /\d+/;  //match any digit
re = /\D/;  //match any non digit
re = /\s/;  //match any white space
re = /\S/;  //match any non-white space
re = /Hell\b/i; //word boundry

// assertion 
re = /x(?=y)/;  //match if x is followed by y 
re = /x(?!y)/;  //match if x is not followed by y 

// string to match 
const str = 'hex';

// log result 
const result = re.exec(str);
console.log(result);

function reTest(re,str){
    if(re.test(str)){
        console.log(`${re.source} is in the sentence : ${str}` );
    }else{
        console.log(`${re.source} is NOT the sentence : ${str}` );
    }
}

reTest(re,str);