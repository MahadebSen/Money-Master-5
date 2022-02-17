
// calculate button
document.getElementById('calculate').addEventListener('click', function(){
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const clothes = document.getElementById('clothes').value;

    // total Expenses
    const totalEx = document.getElementById('total-ex');
    totalEx.innerText = parseInt(food) + parseInt(rent) + parseInt(clothes);

    // balance
    const balance = document.getElementById('balance');
    balance.innerText = parseInt(income) - parseInt(totalEx.innerText);
    
});

// save
document.getElementById('save-btn').addEventListener('click', function(){
    const savingAmount = document.getElementById('saving-amount');
    const saveInput = document.getElementById('save-input');
    const remainingBalance = document.getElementById('remaining-balance');

    // saving amount
    savingAmount.innerText = parseInt(income.value) *  parseInt(saveInput.value) / 100;

    // remaining
    remainingBalance.innerText = parseInt(balance.innerText) - parseInt(savingAmount.innerText);

});


