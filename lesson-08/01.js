/*
  Изучите файл index.html (секцию "Урок 8"). Разметка уже написано - нужно добавить только js-код.

  Функционал магазина питомцев почти готов. Не хватает возможности добавлять питомцев в корзину.
  Ваша задача написать обработчик события, который будет добавлять питомцев в корзину.

  1. При клике на кнопку с питомцем, id питомца должен добавляться в массив cart.
  2. После добавления питомца в корзину, необходимо вызвать функцию updateCartDisplay (она обновит отображение корзины).
  3. В корзину можно добавить не более 3 питомцев. Если пользователь пытается добавить больше, то в messageBox должен появится текст: 'Вы не можете добавить более 3 питомцев'

  ❕❕❕ Представленный в задании код не следует изменять. Требуется только дописать обработчик события.

  🧙 Подсказка: используй делегирование - будет достаточно одного обработчика событий на контейнере
  🧙 Подсказка: если пользователь кликнет по кнопке с питомцев, id питомца можно будет получить из объекта события (event.target.id)
*/

const PETS = [ // Создается массив объектов PETS, где каждый объект описывает питомца
// с уникальным id и его названием (title).
    {id: 'cat', title: '🐱'},
    {id: 'dog', title: '🐶'},
    {id: 'parrot', title: '🦜'},
    {id: 'fish', title: '🐠'},
    {id: 'spider', title: '🕷'},
    {id: 'snake', title: '🐍'},
    {id: 'hamster', title: '🐹'},
    {id: 'turtle', title: '🐢'},
    {id: 'chinchilla', title: '🦇'},
    {id: 'hedgehog', title: '🦔'},
    {id: 'rat', title: '🐀'},
    {id: 'frog', title: '🐸'},
]

const cart = [] // массив для хранения идентификаторов питомцев

// Используются методы document.querySelector и document.getElementById для получения ссылок на элементы:

const petShop = document.querySelector('.pet-shop') // контейнер, где будут размещены кнопки для питомцев.
const cartList = document.getElementById('cart-list') // список для отображения питомцев в корзине.
const messageBox = document.getElementById('message-box') // элемент для вывода сообщений пользователю.
const clearCartButton = document.getElementById('clear-cart-button') // кнопка для очистки корзины.

// Рендерим кнопки для питомцев
for (let i = 0; i < PETS.length; i++) { // перебирается массив PETS
    const pet = PETS[i]
    const petButtonElement = document.createElement('button') // Для каждого питомца создается
    // кнопка с помощью document.createElement('button').
    petButtonElement.classList.add('pet') // добавляется CSS-класс pet для стилизации.
    petButtonElement.id = pet.id // добавляется уникальный id, соответствующий id питомца.
    petButtonElement.textContent = pet.title // добавляется текстовое содержимое (title) — эмодзи питомца.
    petShop.append(petButtonElement) // кнопка добавляется в контейнер .pet-shop с помощью append.
}

// Обновляем отображение корзины
function updateCartDisplay() {
    cartList.innerHTML = '' // очищается содержимое списка корзины

    for (let i = 0; i < cart.length; i++) { // Перебирается массив cart, содержащий id добавленных питомцев.
        const petId = cart[i]
        const pet = PETS.find((item) => item.id === petId) // Для каждого id
        // находится соответствующий объект питомца в PETS с помощью find.
        const petSpanElement = document.createElement('li') // Создается элемент списка (<li>),

        petSpanElement.classList.add('pet') // добавляется CSS-класс pet
        petSpanElement.textContent = pet.title // и текстовое содержимое (название питомца)
        cartList.append(petSpanElement) // элемент добавляется в список cartList.
    }
}

clearCartButton.addEventListener('click', function () { // очистка корзины
    cart.length = 0 // просто обнуление массива
    updateCartDisplay() // и обновление корзины
})

// Твой код:
petShop.addEventListener('click', function (event) { // Навешивается обработчик события click
    // на контейнер .pet-shop (делегирование).
    const targetElement = event.target.id // При клике на кнопку: получается id элемента, по которому кликнули (event.target.id).
    if (cart.length < 3) { // если в корзине меньше 3 питомцев:
        cart.push(targetElement) // id добавляется в массив cart
        updateCartDisplay() // вызывается updateCartDisplay для обновления корзины.
    } else { // если в корзине уже 3 питомца
        messageBox.textContent = 'Вы не можете добавить более 3 питомцев' // в элементе messageBox выводится сообщение:
        // "Вы не можете добавить более 3 питомцев".
    }

})