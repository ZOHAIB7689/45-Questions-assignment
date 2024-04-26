let currrent_users = ["admin", "user1", "user2", "user3", "user4"];
let new_users = ["user1", "user6", "admin", "user7", "user9"];
new_users.forEach(newUser => {
    if (currrent_users.some(currentUser => currentUser.toLowerCase()
        ===
            newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
export {};
