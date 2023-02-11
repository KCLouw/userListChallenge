let userNames = [" Kyle", " Mbali", " Daren", " Lex", " Robert", " Crispin", " Manou", " Marcel", " Matlin", " Claudia"];
let userInput = parseInt(prompt("========== Menu ========== \n What would youlike to do? \n \n 1) Add three Users \n 2) Remove User \n 3) Display all users \n 4) Sort Users"));

switch (userInput) {
    case 1:
        let addUser1 = prompt("Add first additional user");
        let addUser2 = prompt("Add second additional user");
        let addUser3 = prompt("Add third additional user");
        userNames.push(" " + addUser1, " " + addUser2, " " + addUser3);
        document.getElementById("result").innerHTML = userNames;
        document.getElementById("h3").style.display = "block";
        break;

    case 2:
        let userRemove = parseInt(prompt("Which user would you like to remove? \n 1) Kyle \n 2) Mbali \n 3) Daren \n 4) Lex \n 5) Robert \n 6) Crispin \n 7) Manou \n 8) Marcel \n 9) Matlin \n 10) Claudia"));
        let userRemove1 = userRemove - 1; 
        userNames.splice(userRemove1, 1);
        document.getElementById("result").innerHTML = userNames;
        document.getElementById("h3").style.display = "block";
        break;

    case 3:
        let merge = userNames.reduce(function(x,y){return x += y});
        document.getElementById("result").innerHTML = merge;
        document.getElementById("h3").style.display = "block";
        break;

    case 4:
        userNames.sort();
        document.getElementById("result").innerHTML = userNames;
        document.getElementById("h3").style.display = "block";
        break;

    default:
        alert("Please choose a valid number");
        break;
};