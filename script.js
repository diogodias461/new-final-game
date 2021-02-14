let points = 0;
 if (ganhou = true) {
         points += 1
        return points;     
}
let ganhou = false;
window.rollDice = () => {
        if (ganhou) {
                return;
        }
        let currentPlayerTurn = 0;
        let position = [4][0];
        
        let tab = [
                [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                [39, 38, 37, 36, 35, 34, 33, 32, 31, 10],
                [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ];

        let playerimg = document.createElement("div");
        playerimg.style.cssText = 'position: absolute; height: 40px;width: 40px;border-radius: 50%;border: 1px solid;';


        const players = [{
                name: "proj-alg",
                position: tab[4][0],
                color: "white",
                style: playerimg,
        }];

        let x = 0 ;
        let y = 0;
       
        //board
        function createTab() {
                let table = "<table border = '1'>";
                for (let i = 0; i < tab.length; i++) {
                        table += "<tr>";
                        for (let j = 0; j < tab[i].length; j++) {
                                table += "<td>" + tab[i][j] + "<td>";
                        }
                        table += "</tr>";
                }
                table += "</table>";
                document.querySelector("#king").innerHTML = table;
        }
        createTab();

        let questions = [
                { name: 'Qual a capital de portugal?', answer: 'Lisboa', level: 1 },
                { name: 'Em que ano aconteceu o grande terramoto de Lisboa?', answer: '1955', level: 2 },
                { name: 'Qual a religião predominante em Portugal?', answer: 'Catolicismo', level: 3 },
                { name: 'Portugal fica em qual continente?', answer: 'Europa', level: 4 },
                { name: 'Qual é o idioma oficial de Portugal?', answer: 'Portugês', level: 5 },
        ];

        //dado
        const max = 6;
        const roll = Math.ceil(Math.random() * max);
        console.log("Saiu", roll);
        let currentPlayer = players[currentPlayerTurn];
        let playerfinal = currentPlayer.position + roll;
        console.log('possss',playerfinal);
        
        if (currentPlayer.position === tab[2][20]) {
                let pergunta = +prompt(questions.name === questions.level == '1');
                if (pergunta === questions.answer == questions.level === '1') {
                        currentPlayer.position += roll;
                }
                else {
                        currentPlayerTurn++;
                }
        } else if (currentPlayer.position === tab[1][30]) {
                let pergunta = +prompt(questions.name === questions.level == '2');
                if (pergunta === questions.answer == questions.level === '2') {
                        currentPlayer.position += roll;
                }
                else {
                        currentPlayerTurn++;
                }

        } else if (currentPlayer.position === tab[0][40]) {
                let pergunta = +prompt(questions.name === questions.level == '3');
                if (pergunta === questions.answer == questions.level === '3') {
                        currentPlayer.position += roll;
                }
                else {
                        currentPlayerTurn++;
                }
        } else if (currentPlayer.position === tab[0][50]) {
                let pergunta = +prompt(questions.name === questions.level == '4');
                if (pergunta === questions.answer == questions.level === '4') {
                        currentPlayer.position += roll;
                }
                else {
                        currentPlayerTurn++;
                }
        } else if (currentPlayer.position === tab[50]) {
                let pergunta = +prompt(questions.name === questions.level == '5');
                if (pergunta === questions.answer == questions.level === '5') {
                        currentPlayer.position += roll;
                }
                else {
                        currentPlayerTurn++;
                }
        }
        /*const pos = 'ola';
        switch (pos) {
                case currentPlayer.position === tab[5]:
                    let pergunta = +prompt(questions.name === questions.level === '1')
    
                        break;
        
                default:
                        break;
        }*/

        if (currentPlayer.position === position) {
                const diff = currentPlayer.position - position;
                currentPlayerPosition = position - diff;
        }

        currentPlayerTurn++;
        if (currentPlayerTurn >= playerimg.length) {
                currentPlayerTurn = 0;
        }

}

localStorage.name = "PROJETO"
localStorage["name"] = "PROJETO"
localStorage.setItem("name" , "PROJETO");