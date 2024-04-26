let guests = ["shameem", "shakeel", "sharjeel"];
console.log("Great news! I found a bigger dinner table!");
let unable_to_attend = "shameem";
console.log(`${unable_to_attend} can't make it to dinner`);
let newGuest = "sahil";
guests[guests.indexOf(unable_to_attend)] = newGuest;
// Adding more guests
guests.unshift("shaan");
guests.splice(guests.length / 2, 0, "shaaan");
guests.push("shreya");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
export {};
