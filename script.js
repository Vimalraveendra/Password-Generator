const pass = document.getElementById('pass')
const copyEle = document.getElementById('copy')
const length = document.getElementById('length')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const generator = document.getElementById('btn-generator')


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTVUWXYZ';
const lowerLetters ='abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols ='!@#$%^&*()_+';

function getLowerLetters (){
    // here we are creating a random  number based on the  lowerLetters length ,
    //  so here we are creating a random alphabets  between 0 & 26 &returning 
    // the alphabet based on that number lowerLetters[0] ="A"
    return lowerLetters [Math.floor(Math.random() *  lowerLetters.length)]
}

function getUpperLetters(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}
function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}

function generatePassword(){
    const len = length.value;
 
    let password=""
    let count =0;
  // here we are checking how many check box are clicked
    if( lower.checked){
        count++
    //   password += getLowerLetters()
    }
    if(upper.checked){
        count++
        // password += getUpperLetters()
    }
    if(number.checked){
        count++
        // password += getNumbers()
    }
    if(symbol.checked){
        count++
        // password += getSymbols()
    }
    
    
   while(count>0 && password.length<len){
       // based on the count value & password length we are invoking the 
       // generateValue function & the return value is stored in the variable value.
       const  value = generateValue()
       password += value
    
   }

   if(count===0){
      return  pass.innerHTML=pass.textContent
   }
    pass.innerHTML=password
  
}

function generateValue(){
    let  result  ='';
    if(lower.checked){
        result += getLowerLetters()
    }
    if(upper.checked){
        result += getUpperLetters()
    }
    if(number.checked){
        result += getNumbers()
    }
    if(symbol.checked){
        result +=getSymbols()
    }
    return result;
}
const copyPassword =  () => {
    const textarea = document.createElement("textarea");
    const password = pass.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
};

copyEle.addEventListener('click',copyPassword)

generator.addEventListener('click',generatePassword)