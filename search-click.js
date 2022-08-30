const imgClick = document.querySelector("#search-img");
const form = document.querySelector("#form")

imgClick.addEventListener("click", () =>{
        
        if(form.classList.toggle("active")){
            imgClick.style.backgroundColor='hsl(213, 84%, 22%)'
        }else{
            imgClick.style.backgroundColor='hsl(214, 82%, 11%)'
        }
})