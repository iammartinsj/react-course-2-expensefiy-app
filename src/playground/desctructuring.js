/**
 * Object Destructuring
 */

// const person = {
//   name:'Steve Martin',
//   age:24,
//   location: {
//     city:'Manila',
//     temp:37
//   }
// }

// const { name:firstName = 'Anonymous', age} = person;
// console.log(`Hi Im ${firstName} currently im ${age} year's old`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name:publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

/**
 * Array Destructuring
 */
const Item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [itemName, ,mediumPrice] = Item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);