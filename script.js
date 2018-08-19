/*
 *
 * function to implement callback functions
 * 
 * 
 */
 
 /* function to prepare food
  parameter 1 : String of array
  parameter 2: callback function
  */  
function prepareOrder(tablenumber, orders, callback)
{
    console.log('Preparing food for items - ( %d ) ["%s","%s","%s"]', tablenumber,orders[0],orders[1],orders[2]);   
 
    callback(tablenumber, orders);
}
/*
 * 
 * callback or high order function
 * parameter -1 : tablenumber
 * parameter -2 : order
 */
function serveFood(tablenumber, orders)
{
    console.log('Serving food for items - ( %d ) ["%s","%s","%s"]', tablenumber, orders[0], orders[1], orders[2]);       
}
//create array of strings for order   
var order = ["Burger", "Pasta", "Coke"];
prepareOrder(3, order, serveFood);
