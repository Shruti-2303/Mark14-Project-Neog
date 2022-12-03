const stockInput = document.querySelectorAll('.stock-input');
const calculateBtn = document.querySelector('#calculate');
const outputTag = document.querySelector('#output');

function calculateProfitOrLoss(initial,quantity,current){
    if(initial > current){
        const loss = (initial - current) * quantity;
        const lossPercentage = (loss / initial)* 100;
        outputTag.innerText = `Your loss is ${loss} and loss percentage is ${lossPercentage}%`;
    }
    else if(current > initial){
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit/initial) * 100;
        outputTag.innerText = `Your profit is ${profit} and profit percentage is ${profitPercentage}%`;
    }
    else{
        outputTag.innerText = "No profit no loss!!";
    }
}

function clickHandler(){
    const result = calculateProfitOrLoss(stockInput[0].value,stockInput[1].value,stockInput[2].value);
    console.log(result);
}
calculateBtn.addEventListener('click',clickHandler);
