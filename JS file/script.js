// function 1
function getNumberValue(inputField){
    // debugger;
    const inpueText = document.getElementById(inputField);
    const inputNumber = parseInt(inpueText.value);
    
    if (isNaN(inputNumber)){
        validation2(inputField);
    }
    else if (inputNumber < 0){
        validation(inputField);
    }
    return inputNumber;
};

//function 2
function validation2(num2){
    return alert("Please Enter any Number not Text in" + " " + num2);
};

// function 3
function validation(num){
    return alert("Please Enter a Possitive Number in" + ' ' + num);
};

// function 4
function getSubtraction(a, b){
    return a - b;
};


// calculate button
document.getElementById('calculate').addEventListener('click', function(){

    const income = getNumberValue('income');
    const food = getNumberValue('food');
    const rent = getNumberValue('rent');
    const clothes = getNumberValue('clothes');
    

    // total Expenses
    const totalEx = document.getElementById('total-ex');
    totalEx.innerText = food + rent + clothes;

    // balance
    const balance = document.getElementById('balance');
    balance.innerText = getSubtraction(income, parseInt(totalEx.innerText));

    // validation
    if (income < totalEx.innerText){
        alert("your Expenses is so High");
        return balance.innerText = "your Expenses is so High";
    };
    

});
 


// save click
document.getElementById('save-btn').addEventListener('click', function(){

    const savingAmount = document.getElementById('saving-amount');
    const saveInput = getNumberValue('save-input');
    const remainingBalance = document.getElementById('remaining-balance');

    // saving amount
    savingAmount.innerText = parseInt(income.value * saveInput / 100);

    // remaining balance
    remainingBalance.innerText = getSubtraction(parseInt(balance.innerText), parseInt(savingAmount.innerText));
    debugger
    // validation
    if (remainingBalance.innerText <= 0){
        alert("You cann't save this amount");
        return remainingBalance.innerText = "You cann't save this amount";
    };

});



// save input keyup
const saveBtn = document.getElementById('save-btn');
document.getElementById('save-input').addEventListener('keyup', function(event){
    debugger
    
    if ( isNaN(event.target.value) || event.target.value.length == 0){
        saveBtn.setAttribute("disabled", true);
    }
    else {
        saveBtn.removeAttribute("disabled");
    }
});




// clear 
document.getElementById('clear').addEventListener('click', function(){
    income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
    document.getElementById('save-input').value = "";

    /* /not working (don't know why)/
    saveInput.value = '';

    totalEx.innerText = '';
    balance.innerText = '';
    savingAmount.innerText = '';
    remainingBalance.innerText = '';*/

    document.getElementById('total-ex').innerText = 0;
    balance.innerText = 0;
    document.getElementById('saving-amount').innerText = 0;
    document.getElementById('remaining-balance').innerText = 0;
    saveBtn.setAttribute("disabled", true);
});

