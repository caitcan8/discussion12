document.querySelector('input[name="useBilling"]').addEventListener("change", function(){
    
    if(this.checked){
        document.getElementById('home').value = document.getElementById('billing').value;
    }
    else{
        document.getElementById('home').value = "";
    }
    
} )
