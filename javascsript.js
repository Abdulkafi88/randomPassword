const btn = document.querySelector("#btn")
const btnCap = document.querySelector("#btncp")
const input = document.querySelector("#pass")

let passwordsgenerator = [
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><",
]
let passwordLength = 20

btn.addEventListener("click", (e) => {
  let newPassword = [``]
  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * passwordsgenerator[0].length)
    newPassword += passwordsgenerator[0][random]
  }
  input.value = newPassword
})

   btnCap.addEventListener("click", (e) => {
     if (input.value != "") {
       navigator.clipboard.writeText(input.value)
       input.classList.add("active")
       setTimeout(() => {
         input.classList.remove("active")
       }, 1000)
     }
   })