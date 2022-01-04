const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [{
        id: 1,
        author: "Фицджеральд",
        name: "Великий Гетсби",
        isReading: false
    },
    {
        id: 2,
        author: "Толстой",
        name: "Анна Каренина",
        isReading: false
    },
    {
        id: 3,
        author: "Оруел",
        name: "1984",
        isReading: false
    },
    {
        id: 4,
        author: "Сервантес",
        name: "Дон Кихот",
        isReading: false
    },
    {
        id: 5,
        author: "Достоевские",
        name: "Преступление и наказание",
        isReading: false,
    },
];

function library() {
    let action = prompt("Action: ");

    if (action === null) {
        alert("Bye!");
        return;
    }


    action = action.toLowerCase().trim();

    switch (action) {
        case "take":
            takeBook();
            break;
        case "return":
            returnBook();
            break;
        case "add":
            addBook();
            break;
        default:
            alert("No action!");
    }
}

const takeBook = () => {
    const availableBooks = books
        .filter((book) => !book.isReading)
        .map((book) => ` - ${book.name}`)
        .join("\n");

    let bookToTakeName = prompt(`What book you want to take?:\n${availableBooks}`);

    if (!bookToTakeName) {
        alert("No book to take!");
        return;
    }

    bookToTakeName = bookToTakeName.trim().toLowerCase();

    const bookToTake = books.find((book) => {
        return book.name.toLowerCase() === bookToTakeName;
    });

    if (!bookToTake) {
        alert("No book to take!");
        return;
    }

    if (bookToTake.isReading) {
        alert("This book is reading!")
        return;
    }

    bookToTake.isReading = true;
    alert(`Done! Your book id is ${bookToTake.id}`);

    console.log(books);
}

const returnBook = () => {
    const bookToReturnId = Number(prompt("Enter the id of returning book: "));

    if (!bookToReturnId) {
        alert("No book to return");
        return;
    }

    const currentBook = books.find((book) => book.id === bookToReturnId);

    if (!currentBook) {
        alert("Incorrect book ID!");
        return;
    }

    if (!currentBook.isReading) {
        alert("This book is not reading now!");
        return;
    }

    currentBook.isReading = false;
    alert("Thanks, come again!");
}

const addBook = () => {
    const name = prompt("Enter the book name: ");
    const author = prompt("Enter the author: ");

    const newBook = {
        name,
        author,
        isReading: false,
        id: generateBookId(),
    };

    books.push(newBook);

    alert(`Book was added successfully! Book id is: ${newBook.id}`);
};

function generateBookId() {
    let isNewIdExists = true;
    let newID;

    do {
        newID = Math.ceil(Math.random() * 1000);
        isNewIdExists = Boolean(books.find((book) => book.id === newID));
    } while (isNewIdExists);

    return newID;
};
