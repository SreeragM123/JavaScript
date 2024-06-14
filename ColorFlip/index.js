const body=document.getElementsByTagName("body")[0]
function color(name){
    body.style.backgroundColor=name;
}
function random(){
    const red=Math.round(Math.random()*255)
    const green=Math.round(Math.random()*255)
    const blue=Math.round(Math.random()*255)
    const rgb=`rgb(${red},${green},${blue})`
    body.style.backgroundColor=rgb;
}