// const casePlus = document.getElementById('case-plus');
// casePlus.addEventListener('click', function(){
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = parseInt(caseInput.value);
//     caseInput.value = caseNumber + 1;
// })

// const caseMinus = document.getElementById('case-minus');
// caseMinus.addEventListener('click', function(){
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = parseInt(caseInput.value);
//     caseInput.value = caseNumber - 1;
// })


function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    let productNewCount = productNumber;
    if(isIncreasing == true){
        productNewCount = productNumber + 1;
    }
    if(isIncreasing == false && productNumber > 0){
        productNewCount = productNumber - 1;
    }
    productInput.value = productNewCount;
    const caseTotal = productNewCount * price;
    document.getElementById(product + '-total').innerText = caseTotal;

    // Update Calculated Product
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   //    console.log(subTotal);
   document.getElementById('sub-total').innerText = subTotal;

   const tax = Math.round(subTotal * 0.1) ;  // (100 / 10)
   document.getElementById('tax-amount').innerText = tax;

   const grandTotal = subTotal + tax ;
   document.getElementById('total-price').innerText = grandTotal;

}

const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)
})
const phoneMinus = document.getElementById('phone-minus');
phoneMinus.addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
})


const casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function(){
    updateProductNumber('case', 59, true);
    
})

const caseMinus = document.getElementById('case-minus');
caseMinus.addEventListener('click', function(){
    updateProductNumber('case', 59, false)
})