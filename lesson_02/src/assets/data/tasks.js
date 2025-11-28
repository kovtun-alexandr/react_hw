import Authorization from "../components/Authorization/Authorization"
import Ticket from "../components/Ticket/Ticket"
import Translator from "../components/Translator/Translator"
import SearchResult from "../components/SearchResult/SearchResult"

const tasks = [
    {
        id: 1,
        title: 'Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:',
        subtasks: [
            {
                id: 1.1,
                text: 'якщо логін = Іван – колір повідомлення про помилку синій'
            },
            {
                id: 1.2,
                text: 'якщо хтось інший, то колір повідомлення червоний'
            }
        ],
        component: Authorization
    },
    {
        id: 2,
        title: 'З випадаючого списку вибираємо клас квитка у літаку. Якщо:',
        subtasks: [
            {
                id: 2.1,
                text: 'бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают'
            },
            {
                id: 2.2,
                text: 'економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.'
            }
        ],
        component: Ticket
    },
    {
        id: 3,
        title: 'Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).',
        component: Translator
    },
    {
        id: 4,
        title: ' Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)',
        component: SearchResult
    }
]

export default tasks