let text=document.getElementById("b")
function display (x){
    text.value = text.value+x
}
let btn=document.getElementById("s")
btn.addEventListener("onclick ",()=>{
 text.value = ""
})
