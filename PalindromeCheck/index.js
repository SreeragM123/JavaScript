const input=document.getElementById("input")
function rev(){
   return input.value.split("").reverse().join("")
}
function check(){
    const reversed=rev()
    if(input.value===reversed){
        alert("PALINDROME")
    }else{
        alert("NOT A PALINDROME")
    }
    input.value=""
}