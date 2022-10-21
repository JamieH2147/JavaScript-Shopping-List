
const itemList = document.querySelector('ul');
const itemInput = document.querySelector('#item');
const itemSubmit = document.querySelector('button');

itemSubmit.addEventListener('click', addListItem);


function addListItem() {

  const itemValue = itemInput.value;
  itemInput.value = '';

  const newItem = document.createElement('li');
  const itemText = document.createElement('span');
  const deleteButton = document.createElement('button');
  itemText.textContent = itemValue;
  deleteButton.textContent = 'Delete';
  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);
  itemList.appendChild(newItem);

  deleteButton.addEventListener('click', () => {

    itemList.removeChild(newItem);
    itemInput.focus();

  })

  itemInput.focus();

}
