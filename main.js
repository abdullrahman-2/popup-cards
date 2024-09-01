

document.querySelector(".fa-circle-chevron-right").addEventListener("click" ,() => {
    document.querySelector(".act").nextElementSibling.classList.add("act")
    document.querySelector(".act").classList.remove("act")
    document.querySelector(".active").nextElementSibling.classList.add("active")
    document.querySelector(".active").classList.remove("active")
} )

function sett(){

    setInterval( ()=>{
        document.querySelector(".act").nextElementSibling.classList.add("act")
        document.querySelector(".act").classList.remove("act")
        document.querySelector(".active").nextElementSibling.classList.add("active")
        document.querySelector(".active").classList.remove("active")
    } , 3000)
  
}
sett();

document.querySelector(".fa-circle-chevron-left").addEventListener("click" ,() => {
    document.querySelector(".act").previousElementSibling.classList.add("actt")
    document.querySelector(".act").classList.remove("act")
    document.querySelector(".actt").classList.add("act")
    document.querySelector(".act").classList.remove("actt")
    document.querySelector(".active").previousElementSibling.classList.add("acti")
    document.querySelector(".active").classList.remove("active")
    document.querySelector(".acti").classList.add("active")
    document.querySelector(".active").classList.remove("acti")
} )
