



document.getElementById("to").addEventListener("click", ()=>{
  view()
})

function view(){
  var trg1=document.querySelector("#about")
  var trg2=document.querySelector("#gallery")
  trg1.style.display="none"
  trg2.style.display="block"
}


document.getElementById("back").addEventListener("click", ()=>{
  
  vie()
})

function vie(){
  var trg1=document.querySelector("#about")
  var trg2=document.querySelector("#gallery")
  trg2.style.display="none"
  trg1.style.display="block"
}
