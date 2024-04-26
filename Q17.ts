let guests: string[] = ["shameem", "shakeel", "sharjeel"];
console.log("Great news! I found a bigger dinner table!");


let unable_to_attend : string ="shameem";
console.log(`sorry ${unable_to_attend} can't make it to dinner`)


let newGuest : string = "sahil"
guests[guests.indexOf(unable_to_attend)]= newGuest;

// Adding more guests
guests.unshift("shaan");
guests.splice(guests.length / 2, 0, "shaaan");
guests.push("shreya");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});




console.log("unfotunately , i can invite two people for party")
while (guests.length){
    let removed_guests = guests.pop()
    console.log(`sorry ${removed_guests} i can't invite you to party`)

}


guests.forEach(guests => {
    console.log(`dear ${guests} you are still invited`)

})


guests.splice(0, guests.length)
console.log(guests)