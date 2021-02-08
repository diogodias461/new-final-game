//dado
function rollDice() {
        return Math.floor(Math.random()*6)
}
console.log(rollDice());

let player = [{
        name: 'Diogo',
        surname: 'Dias',
}]
//ranking
var tabuleiro = document.getElementById("tabuleiro");
      
        var table = document.createElement('TABLE');
        table.border = '1';
        table.style.alignSelf= 'center';

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);


//TESTE
function tabela() {
        var tabuleiro = document.getElementById("tabuleiro");
      
        var table = document.createElement('TABLE');
        table.border = '1';
        table.style.alignSelf= 'center';

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        for (var i = 0; i < 5; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        
        for (var j = 0; j < 10; j++) {
                var td = document.createElement('TD');
                td.width = '100';
                td.appendChild(document.createTextNode(" " + i + "," + j));
                tr.appendChild(td);
              }
            }
            tabuleiro.appendChild(table);
          }
          tabela();

          