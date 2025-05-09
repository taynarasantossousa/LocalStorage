let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")
let exit = document.querySelector("#exit")

/* localStorage.setItem("usaername" , "Thay") */

/* 2 -  Pegar item localStorage */
/* let username = localStorage.getItem("username")
 */
/* 3 - Apagar item localStorage */
/* localStorage.removeItem(username)
 */

const sair = ()=> {
    localStorage.removeItem("username")
    welcome.innerHTML = "Faça seu Login!"
}

exit.addEventListener("click" , sair)

function pegarNome() {
     localStorage.setItem("username" , user.value)
     let username = localStorage.getItem("username")

    welcome.innerHTML = `Olá ${username}, Seja bem-Vinda!`
}

function pegarValorLocal() {
    let username = localStorage.getItem("username")

    if (username == null) {
        welcome.innerHTML = "Faça seu Login"
    }else {
        DataTransferItemList.innerHTML = "Faça seu Login"
    }
}
pegarValorLocal()

btn.addEventListener("click", pegarNome)