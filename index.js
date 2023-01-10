//Mở đóng nút youtube
let close_modal = document.getElementById('btn-esc-modal')
let modal = document.getElementById('modal')
let open_modal = document.getElementById('open-modal')

open_modal.addEventListener('click',function(){
    modal.style.display="initial";
})
close_modal.addEventListener('click',function(){
    
    modal.style.display ="none";
})

//animation nhân vật

//button chơi ngay
let open_pl= document.getElementById("btn-playnow")
let modal_pl=document.getElementById('modal-plnow')
let close_pl=document.getElementById('btn-esc-modal-plnow')
let btn_free=document.getElementById('freeplay')
open_pl.addEventListener('click',function(){
    modal_pl.style.display="initial";
})
btn_free.addEventListener('click',function(){
    modal_pl.style.display="initial";
})
close_pl.addEventListener('click',function(){
    
    modal_pl.style.display ="none";
})

//drop-navbar
let dropbar = document.getElementById('dropbar').querySelectorAll('li')
let images=document.getElementById('dropbar-img')
let img
for (var i=0;i<=dropbar.length;i++){
    dropbar[i].addEventListener('mouseover',function(){
    img= this.attributes.name.value
    images.innerHTML= '<img src="/img/'+img+'.jpeg" alt="" width="100%" height="100%"></img>'
})
}