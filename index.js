let close_modal = document.getElementById('btn-esc-modal')
let modal = document.getElementById('modal')
let open_modal = document.getElementById('open-modal')

open_modal.addEventListener('click',function(){
    modal.style.visibility="visible";
})
close_modal.addEventListener('click',function(){
    
    modal.style.visibility ="hidden";
})