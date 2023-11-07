let formSelect1 = document.querySelector(".loc")
let formSelect2 = document.querySelector(".num")
let formSelect3 = document.querySelector("#date")
let formSelect4 = document.querySelector("#time")
let form = document.querySelector(".form")
let buTTon = document.querySelector(".bbbtn")

buTTon.addEventListener("click", function(event){
if (document.querySelector("input").value == ""){
    event.preventDefault()
    alert("please fill your input");
}else{

   form.setAttribute("action" , 'https://www.opentable.com/') 
}
});

