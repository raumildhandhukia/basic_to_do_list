const input = document.querySelector('#todoInput');
const addButton = document.querySelector('#addTodo');

const tableBody = document.querySelector('.todo-table tbody');

addButton.addEventListener('click', function () {
    const inputValue = input.value;
    if (!inputValue) {
        return;
    }
    const newRow = document.createElement('tr');

    const detailCell = document.createElement('td');
    detailCell.textContent = inputValue;

    const timeCell = document.createElement('td');
    timeCell.textContent = new Date().toLocaleTimeString();

    const deleteCell = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.style.display = 'inline-block';
    deleteButton.addEventListener('click', function () {
        newRow.remove();
    });
    deleteCell.appendChild(deleteButton);

    newRow.appendChild(detailCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(deleteCell);

    tableBody.appendChild(newRow);
    input.value = '';
});