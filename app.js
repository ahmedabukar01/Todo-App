const addForm =document.querySelector('#add-form');
const list = document.querySelector('ul');
const search = document.querySelector('.search-box form input');


addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const item = addForm.item.value;
    if(item.length){
        htmlTemplete(item);
        addForm.reset();
    }
    
});

// adding htm templete
let htmlTemplete =(todo)=>{
    const html = `
    <li>
             <span>${todo}</span>
             <i class="fa fa-trash"></i>
     </li>
    `
    list.innerHTML+=html;

}

// deleting
list.addEventListener('click',e=>{
    if(e.target.classList.contains('fa')){
        e.target.parentElement.remove();
    }
})

// filtering
search.addEventListener('keyup',e=>{
    e.preventDefault();
    const letter = search.value;
    filtering(letter);
});

let filtering = (item) =>{
    Array.from(list.children)
    .filter(todo =>{
        return !todo.textContent.includes(item);
    })
    .forEach(todo =>{
        return todo.classList.add('filtered');
    });

    Array.from(list.children)
    .filter(todo =>{
        return todo.textContent.includes(item);
    })
    .forEach(todo =>{
        return todo.classList.remove('filtered');
    })
}
