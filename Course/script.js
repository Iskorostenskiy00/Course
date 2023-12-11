// JavaScript для взаємодії зі сторінкою, наприклад, валідація форм

document.addEventListener('DOMContentLoaded', function () {
    // Код, який викликається при завантаженні сторінки
    console.log('Сторінка завантажена');
});

// Додайте додатковий код для обробки реєстрації, авторизації, відміток на календарі, оплати та ін.
// Додайте це до вашого JavaScript файла (script.js)

function addToSchedule() {
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var scheduleList = document.getElementById('scheduleList');
    var listItem = document.createElement('li');
    listItem.className = 'scheduleItem';
    listItem.innerHTML = `<strong>${date}</strong> о <strong>${time}</strong> <button onclick="removeFromSchedule(this)">Видалити</button>`;
    
    scheduleList.appendChild(listItem);
}

function removeFromSchedule(button) {
    var listItem = button.parentElement;
    listItem.remove();
}
// Додайте це до вашого JavaScript файла (script.js)
function showCardPaymentForm() {
    // Показати блок для вводу даних картки при виборі оплати картою
    document.getElementById('cardPaymentForm').style.display = 'block';
}

function processPayment() {
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (paymentMethod) {
        var method = paymentMethod.value;
        var message = '';

        if (method === 'card') {
            // Оплатити картою - отримати дані картки
            var cardNumber = document.getElementById('cardNumber').value;
            var expiryDate = document.getElementById('expiryDate').value;

            // Використовуйте отримані дані для оплати або виводу повідомлення
            message = `Оплата картою завершена. Дякуємо!\nНомер карти: ${cardNumber}\nТермін дії: ${expiryDate}`;
        } else if (method === 'atGym') {
            message = 'Ваша оплата буде прийнята при вході в зал. Дякуємо!';
        }

        alert(message);
    } else {
        alert('Будь ласка, оберіть метод оплати.');
    }
}
function registerUser() {
    // Отримайте дані з форми реєстрації та виконайте реєстрацію (не реалізовано на клієнті)
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

    // Ваша логіка для реєстрації (можливо, ви захочете викликати серверну частину для збереження даних)

    alert(`Користувач ${regUsername} зареєстрований!`);
}

function loginUser() {
    // Отримайте дані з форми авторизації та виконайте авторизацію (не реалізовано на клієнті)
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Ваша логіка для авторизації (можливо, ви захочете викликати серверну частину для перевірки даних)

    alert(`Користувач ${loginUsername} авторизований!`);
}
function registerUser() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

    // Ваша логіка для реєстрації (не реалізовано на клієнті)

    alert(`Користувач ${regUsername} зареєстрований!`);
    window.location.href = 'home.html'; // Перенаправлення на сторінку home.html
}

function loginUser() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Ваша логіка для авторизації (не реалізовано на клієнті)

    alert(`Користувач ${loginUsername} авторизований!`);
    window.location.href = 'home.html'; // Перенаправлення на сторінку home.html
}
function confirmSchedule() {
    // Отримати значення обраних опцій
    var selectedActivity = document.getElementById("activity").value;
    var selectedTime = document.getElementById("time").value;

    // Створити новий елемент списку для відображення в розділі "Підтвердження"
    var confirmationList = document.getElementById("confirmation");

    // Створити новий параграф для кожного нового заняття
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Заняття: " + selectedActivity + ", Година: " + selectedTime;

    // Додати новий параграф до списку
    confirmationList.appendChild(newParagraph);

    // Скинути форму
    document.getElementById("scheduleForm").reset();
}


