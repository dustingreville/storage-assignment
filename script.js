const setUser = document.getElementById("save.btn");
setUser.addEventListener("click", setItem)

function setItem() {
    localStorage.setItem("username");

}


const showUser = document.getElementById("display-name")
showUser.addEventListener(setItem, show)
const show = localStorage.getItem("username")


const clearUser = document.getElementById("clear.btn");
setUser.addEventListener("click", clearItem)

function clearItem() {
    localStorage.removeItem("username");

}