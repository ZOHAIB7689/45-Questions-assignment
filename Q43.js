let magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
export {};
