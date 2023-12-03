"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции,
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.

class Manager {
  orderMap = new Map();
  cookMap = new Map([
    ["Олег", "Пицца"],
    ["Андрей", "Суши"],
    ["Анна", "Десерт"]
  ])

  newOrder (client, ...order) {
    this.orderMap.set(client, order)
  };

  getAllOrders () {
    return this.orderMap;
  }

  getOrderByClientName (name) {
    const allOrders = this.getAllOrders();
    for (const order of allOrders) {
      if (name === order[0].firstname) {
        return order;
      }
    }
  }

  getCookforOrder (orderType) {
    let currentCook = '';
    for (const cook of this.cookMap) {
      if (orderType === cook[1])
        currentCook = cook[0];
    };
    return currentCook;
  }

  printAllOrders () {
    const allOrders = this.getAllOrders();
    for (const order of allOrders) {
      console.log(`Клиент ${order[0].firstname} заказал:`);
      order[1].forEach(item => {
        let currentCook = this.getCookforOrder(item.type);
        console.log(`${item.type} "${item.name}" - ${item.quantity}; готовит повар ${currentCook}`);
      });
    }
  }

  printOrderByClientName (name) {
    const order = this.getOrderByClientName(name);
    console.log(`Клиент ${order[0].firstname} заказал:`);
    order[1].forEach(item => {
      let currentCook = this.getCookforOrder(item.type);
      console.log(`${item.type} "${item.name}" - ${item.quantity}; готовит повар ${currentCook}`);
    });
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей


manager.printOrderByClientName('Павел');


manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// // Вывод:
// // Клиент Павел заказал:
// // Суши "Филадельфия" - 5; готовит повар Андрей
// // Суши "Калифорния" - 4; готовит повар Андрей
// // Десерт "Тирамису" - 2; готовит повар Анна

console.log('+++++++++++++++++');
manager.printOrderByClientName('Павел');


// manager.newOrder(
//   clientPavel,
//   { name: "Филадельфия", quantity: 1, type: "Суши" },
//   { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
// );
// // Ничего не должно быть добавлено, должна быть выброшена ошибка:
// // Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.