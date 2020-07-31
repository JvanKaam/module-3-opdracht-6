/*make a sandwich with cheese 
get one slice of Bread 
add cheese
put a slice of bread on top*/


function makeSandwichWith (filling) {
    console.log('Get one slice of bread');
    console.log('Add ' + filling);
    console.log('Put a slice of bread on top');
}

makeSandwichWith ();




function makeSandwich (topping) {
    console.log('Get one slice of bread');
    console.log('Add ' + topping);
    console.log('Put a slice of bread on top');
}

console.log('There you go, a sandwich with ' + makeSandwich ('ham') );


/* declareert is bij de function name (argument) 

calling is de console.log. Je roept de function weer terug. 
*/


console.log('There you go, a sandwich with ' + makeSandwich ('brie') );



function calculateDiscountedPrice (totalAmount, discount) {
    return totalAmount - discount; 
}

console.log(Math.round(calculateDiscountedPrice(15.35, 5.5)) );




function calculateDiscountedPriceAlso (totalAmount, discount) {
    if ( totalAmount >= 25) {
        return totalAmount - discount; 
    } else {
        return totalAmount;
    }
}

console.log(Math.round(calculateDiscountedPriceAlso(15, 12)) );

