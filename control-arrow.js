const controls = document.querySelectorAll(".control");
let currentItem= 0;
const items = document.querySelectorAll(".item")
const maxItems = items.length;

console.log(controls, items); 

controls.forEach(control =>{
    control.addEventListener("click" , () =>{
        const isLeft = control.classList.contains('arrow-left')
         console.log("RODOUUU", isLeft)

         if(isLeft){
            currentItem -=1;
         }else{
            currentItem +=1
         }
         if(currentItem >= maxItems){
            currentItem = 0
         }
         if(currentItem < 0){
            currentItem= maxItems -1
         }
         console.log("BOOOOORAAAAAAA", isLeft, currentItem);

         items.forEach(item =>
            item.classList.remove('current-item'));
            items[currentItem].scrollIntoView({
                inline:"center",
                behavior:"smooth",
            })
    });
})