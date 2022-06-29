 //variáveis da bolinha 
 let xBolinha = 275;
 let yBolinha = 190;
 let diametro = 20;
 let raio = diametro /2;
 //velocidade da bolinha  
 let velocidadeXBolinha = 5; 
 let velocidadeYBolinha = 5; 
 // variáveis da raquete 
 let xRaquete = 5;
 let yRaquete = 130;
 let raqueteComprimento =15;
 let raqueteAltura = 120;
 let colidiu = false ;

//variáves do oponente 
 let xRaqueteOponente = 578;
 let yRaqueteOponente = 130;
 let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosdoOponente = 0;

  function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificarColisaoBorda();
  mostraRaquete (xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete ();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluirPlacar();
  marcaPontos();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
function movimentaBolinha(){ 
 xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificarColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1;
   }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura)
}


function movimentaMinhaRaquete(){
 if (keyIsDown(UP_ARROW)){ 
 yRaquete -= 10;
 }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
  }
}

 function verificaColisaoRaquete(x,y){
 colidiu =   collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha, raio);
   if (colidiu){
     velocidadeXBolinha *= -1;
   }
 }
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente -raqueteComprimento /2 -30
  yRaqueteOponente += velocidadeYOponente 
}
function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(75,0,130)) 
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(75,0,130)) 
  rect(450,10,40,20);
  fill(255);
  text(pontosdoOponente,470,26)
}
function marcaPontos(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosdoOponente += 1;
  }
}



