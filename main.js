// // common function increasing or decreasing ticket:
// function ticketChange(type, isIncrease) {
//     const increaseInput = document.getElementById(type + "Quantity");
//     const increaseNumber = parseInt(increaseInput.value);
//     if (isIncrease == true) {
//         const newInCrease = increaseNumber + 1;
//         increaseInput.value = newInCrease;
//     } else if (isIncrease == false && increaseNumber > 0) {
//         const newInCrease = increaseNumber - 1;
//         increaseNumber.value = newInCrease;
//     }

//     // const fClassTotal = newInCrease * 150;
//     totalPrice();

// }


// // first class ticket code :
// document.getElementById("plusBtn").addEventListener("click", function() {
//     firstTicketChange(true);

// })


// document.getElementById("minusBtn").addEventListener("click", function() {
//     firstTicketChange(false);
// })

// // economy ticket:
// document.getElementById("plusBtn1").addEventListener("click", function() {
//     ecoTicketChange(true);

// })
// document.getElementById("minusBtn1").addEventListener("click", function() {
//     ecoTicketChange(false);
// })



// // count total price :
// function totalPrice() {
//     const eco = document.getElementById("economyQuantity");
//     const ecoNumber = parseInt(eco.value);
//     const first = document.getElementById("firstClassQuantity");
//     const firstNumber = parseInt(first.value);
//     const subTotal = ecoNumber * 100 + firstNumber * 150;
//     document.getElementById("subTotal").innerText = subTotal;
//     document.getElementById("vat").innerText = subTotal * .1;
//     const total = subTotal + subTotal * .1;
//     document.getElementById("grandTotal").innerText = total;
// }













// function firstTicketChange(isIncrease) {
//     const increaseInput = document.getElementById("firstQuantity ");
//     const increaseNumber = parseInt(increaseInput.value);

//     if (isIncrease == true) {
//         const newInCrease = increaseNumber + 1;
//         increaseInput.value = newInCrease;
//     } else if (isIncrease == false && increaseNumber > 0) {
//         const newInCrease = increaseNumber - 1;
//         increaseInput.value = newInCrease;
//     }

//     // const fClassTotal = newInCrease * 150;
//     totalPrice();
// }

// function ecoTicketChange(isIncrease) {
//     const ecoInput = document.getElementById("ecoQuantity ");
//     const ecoNumber = parseInt(ecoInput.value);

//     if (isIncrease == true) {
//         const newInCrease = ecoNumber + 1;
//         ecoInput.value = newInCrease;
//     } else if (isIncrease == false && ecoNumber > 0) {
//         const newInCrease = ecoNumber - 1;
//         ecoInput.value = newInCrease;
//     }

//     // const fClassTotal = newInCrease * 150;
//     totalPrice();
// }


// document.getElementById("plusBtn ").addEventListener("click", function() {
//     const increaseInput = document.getElementById("firstQuantity");
//     const increaseNumber = parseInt(increaseInput.value);
//     const newInCrease = increaseNumber + 1;
//     increaseInput.value = newInCrease;
//     // const fClassTotal = newInCrease * 150;
//     totalPrice();
// })
// document.getElementById("minusBtn ").addEventListener("click", function() {
//     const increaseInput = document.getElementById("firstQuantity");
//     const increaseNumber = parseInt(increaseInput.value);
//     const newInCrease = increaseNumber - 1;
//     increaseInput.value = newInCrease;
//     // const fClassTotal = newInCrease * 150;
//     totalPrice();
// })

// common function increasing or decreasing ticket:
function ticketChange(type, isIncrease) {
    const increaseInput = document.getElementById(type + "Quantity");
    const increaseNumber = parseInt(increaseInput.value);
    let ticketCount = increaseNumber;
    if (isIncrease == true) {
        ticketCount = increaseNumber + 1;
        // increaseInput.value = newInCrease;

    } else if (isIncrease == false && increaseNumber > 0) {
        ticketCount = increaseNumber - 1;
        // increaseNumber.value = newInCrease;
    }
    increaseInput.value = ticketCount;

    // const fClassTotal = newInCrease * 150;
    totalPrice();

}

// count total price :
function totalPrice() {
    const eco = document.getElementById("economyQuantity");
    const ecoNumber = parseInt(eco.value);
    const first = document.getElementById("firstClassQuantity");
    const firstNumber = parseInt(first.value);
    const subTotal = ecoNumber * 100 + firstNumber * 150;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("vat").innerText = subTotal * .1;
    const total = subTotal + subTotal * .1;
    document.getElementById("grandTotal").innerText = total;
}


document.getElementById("bookedBtn").addEventListener("click", function() {
    alert(`Thank You For Buying Ticket.See you Again`)

})