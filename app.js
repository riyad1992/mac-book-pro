// function for add all price
function addAllPrice(){
    let costs = document.getElementsByClassName('costs')
    let subTotalPrice = 0;
    for(let cost of costs){
        let costNumber = parseFloat(cost.innerText)
        subTotalPrice += costNumber;
    }
    return subTotalPrice
}

// function for set prices
function getTotal(totalId){
    let total = document.getElementById(totalId);
    total.innerText = addAllPrice();
}

// function for get call from the configuration button 
function selectConfigaration (configId, price){
    let extraPrice = document.getElementById(configId);
    extraPrice.innerText = price;
    getTotal('total-price')
    getTotal('total')
}

// funtion for onckick handelar
function getClicked(selectCostId, num){
    selectConfigaration(selectCostId, num)
}

// funtion for pomo code
document.getElementById('pomo-code-btn').addEventListener('click', function(){
    let inputValueText = document.getElementById('pomo-code')
    if (inputValueText.value == 'stevekaku'){
        let price = document.getElementById('total-price');
        let priceNumber = parseFloat(price.innerText);
        let total = document.getElementById('total');
        total.innerText = priceNumber - ((priceNumber * 20) / 100 );
    }
    inputValueText.value = '';
})
