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
let df=images.innerHTML
for (var i=0;i<=dropbar.length;i++){
    if(dropbar[i]){
    let img
    dropbar[i].addEventListener('mouseover',function(){
    if(this.hasAttribute('name')){
    img = this.attributes.name.value
    images.innerHTML= '<img src="/img/'+img+'.jpeg" alt="" width="100%" height="80%"></img>'
    }
    })
    dropbar[i].addEventListener('mouseleave',function(){
        images.innerHTML=df
    })

}}

//list-riot
let riot_list=document.getElementById('riot-list')
let riot_drop=document.getElementById('riot-drop')
let close_riot=document.getElementById('close-riot')

riot_list.addEventListener('click',function(){
    riot_drop.style.opacity=1
    riot_drop.style.display="initial"
    riot_drop.style.visibility="visible"

})
close_riot.addEventListener('click',function(){
    riot_drop.style.opacity=0
    riot_drop.style.display="none"
    riot_drop.style.visibility="hidden"

})

//menu-mobile
let pl_mobile=document.getElementById('play-mobile')
let close_mobile=document.getElementById('close-mobile')
let menu_mobile = document.getElementById('menu-mobile')
let open_menu=document.getElementById('open-mobile')

open_menu.addEventListener('click',function(){
    menu_mobile.style.transform="translateX(0)";
})
pl_mobile.addEventListener('click',function(){
    modal_pl.style.display="initial";
    menu_mobile.style.display ="none";

})
close_mobile.addEventListener('click',function(){
    menu_mobile.style.transform="translateX(100%)";
})

