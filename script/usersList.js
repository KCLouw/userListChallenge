let userNames = ["Kyle", "Mbali", "Daren", "Lex", "Robert", "Crispin", "Manou", "Marcel", "Matlin", "Claudia"];
let userInput = parseInt(prompt("========== Menu ========== \n What would youlike to do? \n \n 1) Add three Users \n 2) Remove User \n 3) Display all users \n 4) Sort Users"));

switch(userInput){
    case 1 : 
    let addUser1 = prompt("Add first additional user");
    let addUser2 = prompt("Add second additional user");
    let addUser3 = prompt("Add third additional user");
    userNames.push(addUser1, addUser2, addUser3);
    document.getElementById("result").innerHTML = userNames;
    break;
}