# angularpro-20180531-1930

https://github.com/javascriptru/angularpro-20180531-1930

## Как задавать вопрос:

- формируем вопрос (локализация, песочница)
- групповой чат
- @stepan ^
- мне лично slack/email

## Дополнительные вопросы:

- How to pass params for ngComponentOutlet
- template calls for getter (https://stackblitz.com/edit/angular-ug2xqz?file=src/app/hello.component.ts)
- Утечки памяти и unsubscribe
- Angular Elements make it work
- [How to test a component which contains a custom form control?](https://stackoverflow.com/questions/50821486/how-to-test-a-component-which-contains-a-custom-form-control)
- живой пример ReplaySubject - component post-init
- как передать в аттрибут директиву больше одного параметра - https://stackblitz.com/edit/angular-6x3wqh?file=src/app/test.directive.ts

- tests: async() + testScheduler
- как правильно развивать архитектуру ngrx
- как тестировать ngrx


## Задания на курс
- сделать структурную директиву "ACL": в нее передается какие роли могут иметь доступ к компоненту. Она через сервис смотрит роль текущего пользователя и прячет либо показывает элемент на странице.

- сделать прототип Dashboard странички, где может присуствовать до 20 разных компонентов/виджетов (сами компоненты сделать пустышками с текстом либо картинкой), а их набор и порядок/расположение задается сервром (сэмулировать асинхронный запрос)

- сделать pipe, который будет показывать timeAgo => 1359 seconds ago (min, hours, day...)

- завернуть форму регистрации пользователя (стандартные поля) в angular-element. Сделать параметром: показывать минимальную форму или расширенную. Считывать событие успешного заполнения/отправки формы и ошибок формы.

- сделать форм контрол "светофор", только сделать с помощью radiobuttons. сделать кастомную валидацию (если красный свет - не валидно)

- сделать свой Observable класс/конструктор

- Бонус: пример auditTime/debounceTime. pairwise