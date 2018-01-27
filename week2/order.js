function orderSupplies (item) {
    let warehouse; // undefined
    const deliveryTime = Math.random() * 3000;

     return new Promise(function (resolve, reject) {
        setTimeout(function () {
            warehouse = {
                paint: {
                    product: "Neon green paint",
                    directions: function () { return "Mix it!"}
                },
                brush: {
                    product: "Horsehair brush",
                    directions: function () { return "Start painting!"}
                },
                tarp: {
                    product: "Tarp",
                    directions: function () { return "Cover the floor!"}
                }
            };

            if (warehouse[item]) {
                resolve(warehouse[item]);
                
            } else {
                reject(new Error(`${ item } is out of stock.`));
            }

        }, deliveryTime);
    });
}

function receivedItem(item) {
    console.log(`Received ${ item.product }, time to ${ item.directions() }`);
}

const tarp = orderSupplies("tarp").catch(handleError);
const paint = orderSupplies("paint").catch(handleError);
const brush = orderSupplies("brush").catch(handleError);
const roller = orderSupplies("roller").catch(handleError);

tarp
    .then(function (item) {
        receivedItem(item);
    })
    .then(function () {
        return paint;
    })
    .then(function (item) {
        receivedItem(item);
        return brush;
    })
    .then(function (item) {
        receivedItem(item);
        return roller;
    })
    .catch(handleError);

    function handleError(error) {
        console.log(error.message);
    }





// Solution #1
// orderSupplies("paint", function (item) {
//     receivedItem(item);
//     orderSupplies("brush", receivedItem);
// });



// Solution #2
// let havePaint = false;
// orderSupplies("paint", function (item) {
//     receivedItem(item);

//     havePaint = true;
// });
// orderSupplies("brush", function (item) {
//     if (havePaint) {
//         receivedItem(item);
//     } else {
//         const timer = setInterval(function () {
//             console.log("Checking for paint...");
//             if (havePaint) {
//                 receivedItem(item);
//                 clearInterval(timer);
//             }
//         }, 50);
//     }
// });

// orderSupplies("brush", checkPaint);
// function checkPaint(item) {
//     console.log("Checking for paint...")
//     if (havePaint) {
//         return receivedItem(item);
//     }
//     setTimeout(function() {
//         checkPaint(item);
//     }, 50);
// }



// Solution #3
// let havePaint = false;
// let haveBrush = false;

// orderSupplies("paint", function (item) {
//     console.log("Got paint");
//     receivedItem(item);

//     if (haveBrush) {
//         // what to do if we have brush
//         return receivedItem(haveBrush);
//     }
//     havePaint = item;
// });
// orderSupplies("brush", function (item) {
//     console.log("Got brush");
//     if (havePaint) {
//         // what to do if we have paint
//         return receivedItem(item);
//     }
//     haveBrush = item;
// });



// Solution #4
// const paint = new Promise(function (resolve, reject) {
//     orderSupplies("paint", resolve);
// });

// const brush = new Promise(function (resolve, reject) {
//     orderSupplies("brush", resolve);
// });

// const tarp = new Promise(function (resolve, reject) {
//     orderSupplies("tarp", resolve);
// });

// tarp
//     .then(function (tarpFromWarehouse) {
//         receivedItem(tarpFromWarehouse);
//         return paint;
//     })
//     .then(function (paintFromWarehouse) {
//         receivedItem(paintFromWarehouse);
//         return brush;
//     })
//     .then(function (brushFromWarehouse) {
//         receivedItem(brushFromWarehouse);
//     })
//     .catch(function (error) {
//         console.log("Handle error...");
//     });