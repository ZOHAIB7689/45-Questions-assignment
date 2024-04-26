let usernames : string[] =["user1", "user2","user3","admin"]


usernames.forEach(usernames =>{
    if (usernames === "admin"){
        console.log("Hello admin, would you like to see a status report ")
    }
    else 
    {
        console.log(`hello ${usernames} thank you for logging in`);
    }
});
