// Управление персоналом компании

// Класс Employee
class Employee {
    constructor(name) {
      this.name = name;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
    }
  }
  
  // Класс Manager
  class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Department: ${this.department}`);
    }
  }
  
  // Управление списком заказов
  
  // Класс Order
  class Order {
    constructor(orderNumber) {
      this.orderNumber = orderNumber;
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getTotalPrice() {
      let totalPrice = 0;
      for (let product of this.products) {
        totalPrice += product.price;
      }
      return totalPrice;
    }
  }
  
  // Пример использования классов Employee и Manager
  const employee = new Employee("John Smith");
  employee.displayInfo();
  
  const manager = new Manager("Jane Doe", "Sales");
  manager.displayInfo();
  
  // Пример использования класса Order
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const order = new Order(12345);
  
  const product1 = new Product("Phone", 500);
  order.addProduct(product1);
  
  const product2 = new Product("Headphones", 100);
  order.addProduct(product2);
  
  console.log(order.getTotalPrice()); // Вывод: 600
  