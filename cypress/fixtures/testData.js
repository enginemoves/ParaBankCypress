
const firstNames = ["John", "Alice", "Michael", "Emily", "David", "Sophia", "James", "Olivia", "Robert", "Isabella"];


const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez"];


const randomIndex = Math.floor(Math.random() * firstNames.length);


const firstName = firstNames[randomIndex];
const lastName = lastNames[randomIndex];
const randomNum = Math.floor(Math.random() * 90) + 10; // Generate a random 2-digit number
const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomNum}`;
const email = `${username}@yopmail.com`;


export { firstName, lastName, username, email };
