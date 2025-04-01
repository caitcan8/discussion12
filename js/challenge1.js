window.onload = function() {
    document.querySelector('h1').style.color = '#6E3DFF';
    document.querySelector('h1').style.textAlign = 'center';
    document.querySelector('h1').style.fontStyler = 'Cursive';
}

document.querySelector('#toggle').addEventListener("change", function(){
    console.log("got the checkbox")
    if(this.checked){
        document.getElementById('emailBox').style.display = 'block';
    }
    else{
        document.getElementById('emailBox').style.display = 'none';
    }
    
} )
document.addEventListener("dblclick", function(){
    alert(Date());
})
