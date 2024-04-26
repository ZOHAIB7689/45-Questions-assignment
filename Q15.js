let guest = ["shameem", "sharjeel", "shakeel"];
guest.forEach(guest => { console.log(`heyy ${guest} would you like to join us in party today`); });
let unable_to_attend = "shameem";
console.log(`${unable_to_attend} can't make it to dinner`);
let newGuest = "sahil";
guest[guest.indexOf(unable_to_attend)] = newGuest;
guest.forEach(gues => (console.log(`dear ${guest} would you like to join for party today`)));
export {};
