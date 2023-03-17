const task = prompt("Enter task name:");

if (task === "Number: odd") {
    const userNumber = prompt("Enter your number:");
    if (+userNumber){
        alert("Good job");
    }else {
        alert("Please enter number");
    }
    if (+userNumber % 2 === 0) {
        alert("You entered even number")
    }else {
        alert("You entered odd number")
    }
}

if (task === "String: lexics") {
    const userText = prompt("Enter your text:");
    const badWord = "fool";
    const checkWord = userText.toLowerCase().indexOf(badWord.toLowerCase());
    if (checkWord !== -1) {
        alert("You entered a bad word!");
    } else {
        alert("Good job!")
    }
}

if (task === "Boolean") {
    const question = confirm("Do you like football?") ? alert("Yes") : alert("No");
}

if (task === "Boolean: if") {
    const question = confirm("Are you female?");
    if (question) {
        alert("You are a women!")
    } else {
        alert("You are a man!")
    }
}

if (task === "Comparison: sizes") {
    const userSize = prompt("Enter your size according to the Ukrainian size chart:");
    if (+userSize === 40) {
        alert("Your size in Great Britain size chart - 6")
    }else if (+userSize === 42) {
        alert("Your size in Great Britain size chart - 8")
    }else if (+userSize === 44) {
        alert("Your size in Great Britain size chart - 10")
    }else if (+userSize === 46) {
        alert("Your size in Great Britain size chart - 12")
    }else if (+userSize === 48) {
        alert("Your size in Great Britain size chart - 14")
    }else if (+userSize === 50) {
        alert("Your size in Great Britain size chart - 16")
    }else if (+userSize === 52) {
        alert("Your size in Great Britain size chart - 18")
    }else if (+userSize === 54) {
        alert("Your size in Great Britain size chart - 20")
    }
}

if (task === "Ternary") {
    const question = confirm("Are you female?") ? alert("You are a women!") : alert("You are a man!");
}


if (task === "Prompt: or") {
    const userAge = +prompt("Enter your age:") || alert("You entered invalid age!");
    alert(`Your age ${userAge}`);
}

if (task === "Confirm: or this days") {
    const shopping = confirm('Шопінг?') || alert('ти - бяка');
}

if (task === "Confirm: if this days") {
    const shopping = confirm("Шопінг?");
    if (!shopping) alert("Ти - бяка!");
}

if (task === "Default: or") {
    const userSurname = prompt("Enter your surname:") || 'Ivanov';
    const userName = prompt("Enter your name:") || 'Ivan';
    const userSecondName = prompt("Enter your second name:") || 'Ivanovich';
    const userData = `${userSurname} ${userName} ${userSecondName}`;
    alert(userData);
}

if (task === "Default: if") {
    let userSurname = prompt("Enter your surname:");
    if (!userSurname) userSurname = "Ivanov";
    
    let userName = prompt("Enter your name:");
    if (!userName) userName = "Ivan";
    
    let userSecondName = prompt("Enter your patronymic name:");
    if (!userSecondName) userSecondName = "Ivanovich";
    
    const userData = `${userSurname} ${userName} ${userSecondName}`;
    alert(userData);
}


if (task === "Login and password") {
    const login = "admin";
    const password = "qwerty";
    const userLogin = prompt("Enter your login:");
    if (userLogin === login) {
        const userPassword = prompt("Enter your password:") 
        if (userPassword === password) {
            alert("Greeting!")
        } else {
            alert("You entered wrong password")
        }
    } else {
        alert("You entered wrong login")
    }
}

if (task === "Currency exchange") {
    const usd = "usd";
    const eur = "eur";
    const uah = "UAH";
    let currency = prompt("Enter currency ( USD or EUR):").toLowerCase();
    let isBuying = confirm("Do you want to buy this currency?");
    let rate;

    if (currency === usd) {
    rate = isBuying ? 38.35 : 38.80;
    } else if (currency === eur) {
    rate = isBuying ? 40.40 : 41.10;
    } else {
        alert("Unfortunately, we do not support this currency.");
    }

    if (rate) {
    let amount = parseFloat(prompt("Enter the amount to be exchanged:"));
    let result = isBuying ? amount / rate : amount * rate;
        alert(`You get ${result.toFixed(2)} ${isBuying ? currency.toUpperCase() : uah}.`);
    }
}

if (task === "Scissors") {
    const userChoice = prompt("Choose: rock, scissors or paper:");

    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }

    let compare = "";
    if (userChoice === computerChoice) {
        compare = "The game ended in a draw!";
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            compare = "You win!";
        } else {
            compare = "Computer win!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            compare = "You win!";
        } else {
            compare = "Computer win!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            compare = "You win!";
        } else {
            compare = "Computer win!";
        }
}
    alert("Your choice: " + userChoice + "\nComputer choice: " + computerChoice + "\n" + compare);
}

