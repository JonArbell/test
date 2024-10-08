import * as buttons from './uiInteraction/buttons.js';

document.addEventListener('DOMContentLoaded', () => { // Functionalities of all buttons for creating, editing, deleting a list and todo
    const createNewButton = document.querySelector('#create-new-item-button');
    const xButton = document.querySelector('#create-todo-list-modal-pick > span > p');
    const createNewItemModal = document.querySelector('#create-todo-list-modal-pick');

    if (createNewButton && xButton) {
        createNewButton.addEventListener('mouseup',buttons.createNewItem);
        xButton.addEventListener('mouseup',()=> buttons.removeCreateNewItemModal(createNewItemModal));
    }

    const createNewtodoButton = document.querySelector('#pick-todo');
    createNewtodoButton.addEventListener('mouseup',buttons.createNewTodo);

    const discardCreateNewButton = document.querySelector('#add-edit-todo-discard-button');
    discardCreateNewButton.addEventListener('mouseup');

});


