export function createNewItem(event){

    const createNewButton = document.querySelector('#create-new-item-button');
    const createNewItemModal = document.querySelector('#create-todo-list-modal-pick');

    if(createNewButton.contains(event.target)){
        createNewItemModal.style.display = 'flex';
        document.querySelector('#modal-view-background').style.display = 'block';
    }

}

export function removeCreateNewItemModal(createNewItemModal){
    createNewItemModal.style.display = 'none';
    document.querySelector('#modal-view-background').style.display = 'none';
}


export function createNewTodo(event){

    const createNewtodoButton = document.querySelector('#pick-todo');
    const createNewtodoModal = document.querySelector('#create-edit-todo-modal-container');


    if(createNewtodoButton.contains(event.target)){

        createNewtodoModal.style.display = 'block';
        
    }

}

export function discardCreateNewTodo(){

    

}


