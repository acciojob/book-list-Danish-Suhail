//your JS code here. If required.
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let isbnInput = document.getElementById('isbn');

let btn = document.getElementById('submit');

let bookList = document.getElementById('book-list');

// FIXED: Added missing comma after 'click'
btn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    // Safety Check: Don't add an empty book
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    const row = document.createElement('tr');

    // FIXED: Changed id="delete" to class="delete" and changed "Clear" to "X"
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    bookList.appendChild(row);

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
});

bookList.addEventListener('click', (event) => {
    // Check if the clicked element is a clear/delete button
    if (event.target.classList.contains('delete')) {
        // Target the button's parent cell (<td>), then its parent row (<tr>)
        const rowToDelete = event.target.parentElement.parentElement;
        rowToDelete.remove();
    }
});
