
    let form1 = document.querySelector('.itemform')
let shoppingList= []
 const ul = document.querySelector('#ul')

form1.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputValue = e.target.itemname.value
    console.log(inputValue);
    shoppingList.push(inputValue)
    createElement(shoppingList)
    inputValue.value = ''
})    
        
function createElement(shoppingList){
    const list = document.createElement('li');
    let button = document.createElement('button');
 shoppingList.forEach((shopItem)=>{
    list.textContent = shopItem;
   
})

ul.appendChild(list,button)

}
const purchaseButton = document.getElementById('purchase');



const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
ul.remove()
})
    