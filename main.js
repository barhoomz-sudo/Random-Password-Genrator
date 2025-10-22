const generateBtn = document.getElementById("generate");
const passwordOne = document.getElementById("pass-one")
const passwordTwo = document.getElementById("pass-two")

const characters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","_","+",
  "[","]","{","}","|",";",":",",",".","<",">","?","/","~","`","-","="
];






generateBtn.addEventListener("click", ()=>{
  
  passwordOne.textContent = ''
  passwordTwo.textContent = ''

  for(let i = 0; i < 14; i++){
    let randomOne = Math.floor(Math.random() * characters.length)
    let password = ''
    password+=characters[randomOne]
    passwordOne.textContent += password
  }

  for(let i = 0; i < 14; i++){
    let randomTwo = Math.floor(Math.random() * characters.length)
    let password = ''
    password+=characters[randomTwo]
    passwordTwo.textContent += password
  }

  
})