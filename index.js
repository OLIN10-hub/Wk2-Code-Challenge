document.addEventListener(`DOMContentLoaded`) , () => {
    let form = document.querySelector('itemform')
    form.addEventListener('Add Item', (e) => {
        e.preventDefault()
        addItem(e.target.addItem.value)
        form.reset()

        
    })
}

function addItem(todo){
    let x = document.createElement('x')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    x.textContent = `${todo}`
    x.appendChild(btn)
    console.log(x)
    document.querySelector('#todoContainer').appendChild(x)
    
}

function handleDelete(e){
    e.target.parentNode.remove()
}
