
function getNumberValue(inputField){
    // debugger;
    const inpueText = document.getElementById(inputField);
    const inputNumber = parseInt(inpueText.value);
    
    if (/*inputNumber != "string" ||*/ inputNumber < 0){
        return alert("Please Enter a Possitive Number");
    }
    return inputNumber;
};




// calculate button
document.getElementById('calculate').addEventListener('click', function(event){
    const income = getNumberValue('income');
    const food = getNumberValue('food');
    const rent = getNumberValue('rent');
    const clothes = getNumberValue('clothes');
    

    // total Expenses
    const totalEx = document.getElementById('total-ex');
    totalEx.innerText = food + rent + clothes;

    // balance
    const balance = document.getElementById('balance');
    balance.innerText = income - parseInt(totalEx.innerText);
    

});
 
// save
document.getElementById('save-btn').addEventListener('click', function(){

    const savingAmount = document.getElementById('saving-amount');
    const saveInput = getNumberValue('save-input');
    const remainingBalance = document.getElementById('remaining-balance');

    // saving amount
    savingAmount.innerText = income.value * saveInput / 100;

    // remaining
    remainingBalance.innerText = parseInt(balance.innerText) - parseInt(savingAmount.innerText);

});

// clear 
document.getElementById('clear').addEventListener('click', function(){
    debugger
    income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
    document.getElementById('save-input').value = "";

    /*
    totalEx.innerText = '';
    balance.innerText = '';
    savingAmount.innerText = '';
    remainingBalance.innerText = '';*/

    document.getElementById('total-ex').innerText = 0;
    balance.innerText = 0;
    document.getElementById('saving-amount').innerText = 0;
    document.getElementById('remaining-balance').innerText = 0;
})

