const btn = document.querySelector("#btn")
const btnCap = document.querySelector("#btncp")
const input = document.querySelector("#pass")

let passwordsgenerator = [
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><",
]
let passwordLength = 20
let randomImgs = [
  "https://images.unsplash.com/photo-1545486332-9e0999c535b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM4NzU3NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  `https://images.unsplash.com/photo-1513569771920-c9e1d31714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTc0Mjg2Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`,
  `https://images.unsplash.com/photo-1517601016600-fb06e68c476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDI0MjIwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`
  `https://images.unsplash.com/photo-1446149330071-2f5996cb1b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDkzMjgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`
]

function background() {
  const randomImg = Math.floor(Math.random() * randomImgs.length)
  const unsplashBackground =
    (document.body.style.background = `url(${randomImgs[randomImg]})`)
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.body.style.transition = "5s ease"
 setTimeout(() => {
   document.body.style.transition = ""
 }, 5000)
}

setInterval(() => {
  background()
}, 6000)

btn.addEventListener("click", (e) => {
  let newPassword = [``]
  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * passwordsgenerator[0].length)

    newPassword += passwordsgenerator[0][random]
    console.log(newPassword)
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
