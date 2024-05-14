const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
const passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]){8,}/g
// 
//+996 555 55-55-55
const phoneInput = document.querySelector(".phoneInput")
const phoneCheck = document.querySelector(".phoneCheck")
const phoneResult = document.querySelector(".phoneResult")

const emailInput = document.querySelector(".emailInput")
const emailCheck = document.querySelector(".emailCheck")
const emailResult = document.querySelector(".emailResult")

const passwordInput = document.querySelector(".passwordInput")
const passwordCheck = document.querySelector(".passwordCheck")
const passwordResult = document.querySelector(".passwordResult")

phoneCheck.addEventListener("click", () => {
 if(phoneRegExp.test(phoneInput.value)){
    phoneResult.textContent = "ok :)"
 }else{
    phoneResult.textContent = "not ok :("
 }
 })

 emailCheck.addEventListener("click", () => {
   if(emailRegExp.test(emailInput.value)){
      emailResult.textContent = "ok :)"
   }else{
      emailResult.textContent = "not ok :("
  
   }
   })
   passwordCheck.addEventListener("click", () => {
      if(passwordRegExp.test(passwordInput.value)){
         passwordResult.textContent = "ok :)"
      }else{
         passwordResult.textContent = "not ok :("
     
      }
      })
  