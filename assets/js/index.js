const product = document.querySelectorAll(".my-card")
const btns = document.querySelectorAll(".card-bottom button")
product.forEach( function (product){
    btns.forEach((btn)=>{
        btn.addEventListener("click",function(){
            product.style.transform = 'rotate(180deg)';
            
        })  
      })
})


