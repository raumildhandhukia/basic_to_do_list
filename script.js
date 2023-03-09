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

    const doneCell = document.createElement('td');
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'btn btn-primary btn-sm';
    doneButton.style.display = 'inline-block';
    doneButton.addEventListener('click', function () {
        if (doneButton.textContent == 'Done') {
            detailCell.style.textDecoration = 'line-through';
            doneButton.textContent = 'Un-Done';
        } else {
            detailCell.style.textDecoration = 'none';
            doneButton.textContent = 'Done';
        }
    });
    doneCell.appendChild(doneButton);


    newRow.appendChild(detailCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(doneCell);
    newRow.appendChild(deleteCell);

    tableBody.appendChild(newRow);
    input.value = '';
});