const bill = document.querySelector('.bill');

const people = document.querySelector('.people');
const tipPercentOne = document.querySelector('.select-tip-1');
const tipPercentTwo = document.querySelector('.select-tip-2');
const custom =   document.querySelector('.custom');

let tipPerPersonDisplay = document.querySelector('.tip-number-1');
let totalPerPersonDisplay = document.querySelector('.tip-number-2');
const resetButton = document.querySelector('.button');

let billInputValue ;
let peopleInputValue = 0;
let  customValue =0;
let tipValue =0;
let tipPercentageValue = tipValue / 100;

const updateCalculation = ()=>{
    let tip = document.querySelector('.bill').billInput.value ;
    let customInput =   document.querySelector('.custom').custom.value;
  if(tipValue){
      //tip person
    let  tipPer = tip* tipValue/(100 * peopleInputValue);
  
    tipPer = parseFloat(tipPer).toFixed(2);
 tipPerPersonDisplay.innerHTML =   `
 <div class="tip-number-1">
          <span>$</span>${tipPer}
        </div>
 `;
//total bill
 const tipTotal = document.querySelector('.bill').billInput.value * tipValue/100;
 const tipPlusTotal = parseInt(document.querySelector('.bill').billInput.value) + parseInt(tipTotal);

 

 totalPerPersonDisplay.innerHTML = ` <div class="tip-number-1">
 <span>$</span>${(tipPlusTotal / peopleInputValue).toFixed(2)}
</div>
`;
  }else if(customInput){
      
//custom tip per person

   
customInputForTip = (document.querySelector('.bill').billInput.value ) *  customInput/(100 * peopleInputValue);  
//console.log(customInputForTip)
customInputForTip = parseFloat(customInputForTip).toFixed(2);
tipPerPersonDisplay.innerHTML =   `
<div class="tip-number-1">
         <span>$</span>${customInputForTip}
       </div>
`;
// custom total per person

const customInputTotal = (document.querySelector('.bill').billInput.value ) *  customInput/100;
const customInputPlusTotal = parseInt(document.querySelector('.bill').billInput.value  ) + parseInt(customInputTotal);

totalPerPersonDisplay.innerHTML = ` <div class="tip-number-1">
<span>$</span>${(customInputPlusTotal / peopleInputValue).toFixed(2)}
</div>
`;
  }





    



}

bill.addEventListener('keyup',e=>{

    e.preventDefault();
    billInputValue = bill.billInput.value;
    //console.log(billInputValue)
    updateCalculation()
   
});

people.addEventListener('keyup', e=>{
    e.preventDefault();
     peopleInputValue = people.people.value;
     if(billInputValue || peopleInputValue ){
         updateCalculation()
     }
    
});

tipPercentOne.addEventListener('click', e=>{
    if(e.target.nodeName = "P"){
     tipValue =    parseInt(e.target.textContent)
    // updateCalculation(tipValue)
    }
});
tipPercentTwo.addEventListener('click', e=>{
    if(e.target.classList.contains('twentyFive') || e.target.classList.contains('fifty') ){
        tipValue =    parseInt(e.target.textContent)
        
       // updateCalculation(tipValue)
    } else{
       // tipValue = customValue;
    }
    
});
custom.addEventListener('keyup',e=>{
    e.preventDefault()
    
    customValue = custom.custom.value;
   // console.log(customValue)
    if(customValue =true && e.target.classList.contains('custom')){
       // tipValue = customValue;
      //  console.log(tipValue)
        updateCalculation(customValue);
    }
    
});

resetButton.addEventListener('click',e=>{
    
    document.querySelector('.bill').billInput.value  = 0;
    document.querySelector('.people').people.value = 0;
    document.querySelector('.custom').custom.value = '';
    tipPerPersonDisplay.innerHTML = `<div class="tip-number-1">
    $0.00
  </div>`;
    totalPerPersonDisplay.innerHTML = `<div class="tip-number-1">
    $0.00
  </div>`;

})
