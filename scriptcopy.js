//document.write("new document")
// var val1 = document.getElementById('im1');

// val1.addEventListener("click", function(){
     
// })
var tab_Products = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"]
var tab_Prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var tab_Qty = [5, 3, 4, 9, 7, 5, 9, 2, 7, 4, 2, 8]

function getValue(num) {
    document.getElementById("screenelt").value = document.getElementById("screenelt").value + num;
}

function makeOrderB(p){
    alert('The value of the code is: '+p);
    document.getElementById("screenelt").value = p;
    makeOrder();
}

function resetScreen(){
    document.getElementById("screenelt").value = "";
}

function resetResultScreen(){
    document.getElementById("resultCode").value == "";
    document.getElementById("resultQty").value == "";
    document.getElementById("resultAmount").value == "";
    document.getElementById("resultBalance").value == "";
}

function makeOrder(){

    if(document.getElementById("resultCode").value == ""){
        prod_Ex = product_Exist(tab_Products);
        if(prod_Ex >= 0){
            resetScreen();
            alert('Kindly Enter the Quantity !!!');
        }else{
            alert('Sorry this Product doesn\'t exist !!!');
            alert('Kindly Enter a correct Product !!!');
            resetScreen();
        }
        
    }else{
        if(document.getElementById("resultQty").value == ""){
            qty = parseInt(document.getElementById("screenelt").value);
            var q = checkQty(qty);
            if(q == 1){
                document.getElementById("resultQty").value = qty;
                resetScreen();
                alert('Kindly Enter the Given Amount !!!');
            }else{
                alert('Sorry this Quantity overpass the stock !!!');
                alert('Kindly Enter a correct Quantity !!!');
                resetScreen();
            }
        }else{
            if(document.getElementById("resultAmount").value == ""){
                p = checkPrice();
                if(p >= 0){
                    document.getElementById("resultAmount").value = document.getElementById("screenelt").value;
                    resetScreen();
                    // Calling the Balance Function
                    alert('Thank you for choosing ALPHA\'S !!!');
                    // if(confirm('Would you like to make a new order')){
                    //     resetResultScreen();
                    // }
                }else{
                    alert('Sorry this Amount isn\'t enough !!!');
                    alert('Kindly Enter a suffisant amount !!!');   
                    resetScreen();
                }
            }
        }
    }
}
    

function balance(){
    posprod = posProduct(document.getElementById("resultCode").value);
    price = tab_Prices[posprod];
    amount = parseInt(document.getElementById("resultAmount").value);
    qty = parseInt(document.getElementById("resultQty").value);
    
    bal = (price * qty) - amount;
    document.getElementById("resultBalance").value = bal;
}

function checkPrice(){
    posprod = posProduct(document.getElementById("resultCode").value);
    printedAmount = parseInt(document.getElementById("screenelt").value);
    qtWanted = parseInt(document.getElementById("resultQty").value);
    for (let i = 0; i < tab_Prices.length; i++) {
        if(printedAmount >= (tab_Prices[posprod] * qtWanted)){ // WritePrice >= (qty wanted * Unit Price) of the product
            alert('Price Suffisant');
            document.getElementById("resultAmount").value = document.getElementById("screenelt").value;
            balance();
            return i;
        }
    }
    return -1;
}

function checkQty(qty){ // i = position of the product found
    pospdt = posProduct(document.getElementById("resultCode").value); //Send the prod to get its position
    alert('The quantity to compare to is: '+ tab_Qty[pospdt]);
    if(qty <= tab_Qty[pospdt]){ 
        alert('Enough Quantity');
        resetScreen();
        return 1;
    }else{
        alert('Insuffisant Quantity');
        return 0;
    }
}

function product_Exist(tab_Products) {
    for (let i = 0; i < tab_Products.length; i++) {
        if(document.getElementById("screenelt").value == tab_Products[i]){
            alert('Product Found');
            document.getElementById("resultCode").value = document.getElementById("screenelt").value;
            return i;
        }
    }
    return -1;
}

function posProduct(product){
    for (let i = 0; i < tab_Products.length; i++) {
        if(product == tab_Products[i]){
            return i;
        }
    }
    return -1;
}