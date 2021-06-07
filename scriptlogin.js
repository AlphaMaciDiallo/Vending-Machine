var btn = document.getElementById('login')
btn.addEventListener("click", function(){
    login();
})
var login = function(){

    var user = document.getElementById('username')
    var password = document.getElementById('password')
    
    if(user.value == 'alpha' && password.value == 'pass'){
        alert('Wellcome Mr ALPHA !!!');
        window.open('file:///D:/NIIT/Vending%20Machine/vmachine.html', '_blank');
        //document.write('<a href="file:///D:/NIIT/Vending%20Machine/vmachine.html">Continue</a>')
    }else{
        alert('Invalid User Details !!!')
    }
    resetLoginForm();
}