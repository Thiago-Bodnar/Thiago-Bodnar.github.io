const botoes = document.getElementsByClassName('color');
const pixeis = document.getElementsByClassName('pixel');
const pixelBoard = document.querySelector("#pixel-board");
let currentColor = document.getElementsByClassName('selected');
let selectedColor = document.querySelectorAll('.color');
let boardSize = 5;
const initialSize = 5;
let = botaoLimpar = document.getElementById('clear-board');
let linhas = '';
let colunas = '';
let vQv = document.getElementById('generate-board');
let input = document.getElementById('board-size');
let lines = pixelBoard.children;
let corAleatoria = '';
      geraCores();
      linhasDoQuadro(boardSize);
      selecionaCor();     
      mudaCorPixel();
     
       
        function geraCorAleatoria(corAleatoria) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return 'rgb'+'('+(r+','+g+','+b)+')';
        }

        function geraCores() {
            botoes[0].style.backgroundColor = botoes[0].value;
            for (let i = 1; i < botoes.length; i += 1) {
                botoes[i].value = geraCorAleatoria();
                botoes[i].style.backgroundColor = botoes[i].value;
                }
             }   

         function linhasDoQuadro(p) {   
            for (let i = 0; i < p; i += 1) {
                linhas = document.createElement('div');
                pixelBoard.appendChild(linhas);
                linhas.className = 'linha';
                colunasDoQuadro(p);
                }
             }


         function colunasDoQuadro(p) {
            for (let i = 0; i < p; i += 1 ) {
            colunas = document.createElement('div');
            colunas.classList.add('pixel');
            linhas.appendChild(colunas);
                }
             }  

 

    selectedColor[0].classList.add('selected');
 
             function selecionaCor() {
        for (let i = 0; i < selectedColor.length; i += 1) {
      selectedColor[i].addEventListener('click', function() {
        limpaSelected(selectedColor);    
        selectedColor[i].classList.add('selected')
            })  
        }
    }    

        function limpaSelected () {
            for (let i = 0; i < selectedColor.length; i += 1) {
            selectedColor[i].classList.remove('selected')
            }
        }
 
        function mudaCorPixel() {    
            for (let i = 0; i < pixeis.length; i += 1) {
            pixeis[i].addEventListener('click', function() {
            pixeis[i].style.backgroundColor = currentColor[0].value;
            })
        }
    }   
        botaoLimpar.addEventListener('click', clearBody);

        function clearBody () {
            for (let i = 0; i < pixeis.length; i += 1) {
                pixeis[i].style.backgroundColor = 'white'

            }    
        }
   
         vQv.addEventListener('click', function () { 
            boardSize = input.value;
            if (boardSize === '') {
                alert('Board inválido!');
            } else if (boardSize < 5) {
            apagaQuadro(5);
            linhasDoQuadro(5);
            selecionaCor();
            mudaCorPixel();
            } else if (boardSize > 50) {
            apagaQuadro(boardSize);
            linhasDoQuadro(50);
            selecionaCor();
            mudaCorPixel();
            } else {
                apagaQuadro(boardSize);
            linhasDoQuadro(boardSize);
            selecionaCor();
            mudaCorPixel();
            }
         })
        function apagaQuadro() {
            
            for (let i = 0; i < lines.length; i += 0) {
                pixelBoard.removeChild(lines[i]);
            }
        }
  
    

