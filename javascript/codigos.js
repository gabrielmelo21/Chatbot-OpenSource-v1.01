 
   var all_chat = "";  
 
	function assunto(assunt){
 
 var bot = document.querySelector(".bot-expressions"); 
 var chat = document.querySelector(".chat"); 
 var pergunta_user = "";
 var pergunta_user_txt = "";
 var bot_resposta = "";
 var imagem = "";         
 var barra_chat_update = false;   
 var menu =  "<br><div class='opcoes'><div class='btn-opcoes' onclick='assunto(1);'>Assunto 1</div><div class='btn-opcoes' onclick='assunto(2);'>Assunto 2</div><div class='btn-opcoes' onclick='assunto(3);'>Assunto 3</div><div class='btn-opcoes' onclick='assunto(4);'>Assunto 4</div><div class='btn-opcoes' onclick='assunto(5);'>Assunto 5</div><div class='btn-opcoes' onclick='assunto(6);'>Assunto 6</div><div class='btn-opcoes' onclick='assunto(7);'>Limpar</div><div class='btn-opcoes' onclick='assunto(8);'>Abrir Menu</div></div><br><br>";








switch(assunt){
 

 /** BEM VINDO **/
             case 0:
   bot_resposta = "Oi!, Eu sou seu assistente e estou aqui para tirar suas duvídas sobre <b>{Assunto}</b>, Selecione uma das opções abaixo:";           
   all_chat +=  "<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+"</div>"+menu+"<br><br>";// boas vindas 
             break;
 /** / BEM VINDO **/
 


 case 1:
  pergunta_user_txt = "Assunto 1";//Texto da pergunta do User 
  pergunta_user = "<div class='balao_user'><span class='name'>User</span><br>"+pergunta_user_txt+"</div><br>";// Pegunta do user
  bot_resposta = "Resposta do Bot para o Assunto 1";// Resposta do Bot 
  imagem = "";// imagem na resposta do bot  <br> antes do <img class='round'>
  bot.src = 'imgs/feliz.png'; // muda a expressão do bot
  barra_chat_update = true; // pode atualizar a barra
  all_chat +=  pergunta_user+"<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+" "+imagem+"</div>";
  // Atualiza o Chat 
 break;



 case 2:
  pergunta_user_txt = "Assunto 2";//Texto da pergunta do User 
  pergunta_user = "<div class='balao_user'><span class='name'>User</span><br>"+pergunta_user_txt+"</div><br>";// Pegunta do user
  bot_resposta = "Resposta do Bot para o Assunto 2";// Resposta do Bot 
  imagem = "";// imagem na resposta do bot  <br> antes do <img class='round'>
  bot.src = 'imgs/amor.png'; // muda a expressão do bot
  barra_chat_update = true; // pode atualizar a barra
  all_chat +=  pergunta_user+"<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+" "+imagem+"</div>";
  // Atualiza o Chat 
 break;



 case 3:
  pergunta_user_txt = "Assunto 3";//Texto da pergunta do User 
  pergunta_user = "<div class='balao_user'><span class='name'>User</span><br>"+pergunta_user_txt+"</div><br>";// Pegunta do user
  bot_resposta = "Resposta do Bot para o Assunto 3";// Resposta do Bot 
  imagem = "";// imagem na resposta do bot  <br> antes do <img class='round'>
  bot.src = 'imgs/raiva.png'; // muda a expressão do bot
  barra_chat_update = true; // pode atualizar a barra
  all_chat +=  pergunta_user+"<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+" "+imagem+"</div>";
  // Atualiza o Chat 
 break;



 case 4:
  pergunta_user_txt = "Assunto 4";//Texto da pergunta do User 
  pergunta_user = "<div class='balao_user'><span class='name'>User</span><br>"+pergunta_user_txt+"</div><br>";// Pegunta do user
  bot_resposta = "Resposta do Bot para o Assunto 4";// Resposta do Bot 
  imagem = "";// imagem na resposta do bot  <br> antes do <img class='round'>
  bot.src = 'imgs/normal.png'; // muda a expressão do bot
  barra_chat_update = true; // pode atualizar a barra
  all_chat +=  pergunta_user+"<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+" "+imagem+"</div>";
  // Atualiza o Chat 
 break;


  case 5:
  pergunta_user_txt = "Assunto 5";//Texto da pergunta do User 
  pergunta_user = "<div class='balao_user'><span class='name'>User</span><br>"+pergunta_user_txt+"</div><br>";// Pegunta do user
  bot_resposta = "Resposta do Bot para o Assunto 5";// Resposta do Bot 
  imagem = "";// imagem na resposta do bot  <br> antes do <img class='round'>
  bot.src = 'imgs/normal.png'; // muda a expressão do bot
  barra_chat_update = true; // pode atualizar a barra
  all_chat +=  pergunta_user+"<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+" "+imagem+"</div>";
  // Atualiza o Chat 
 break;


 case 6:
  pergunta_user_txt = "Assunto 6";//Texto da pergunta do User 
  pergunta_user = "<div class='balao_user'><span class='name'>User</span><br>"+pergunta_user_txt+"</div><br>";// Pegunta do user
  bot_resposta = "Resposta do Bot para o Assunto 6";// Resposta do Bot 
  imagem = "";// imagem na resposta do bot  <br> antes do <img class='round'>
  bot.src = 'imgs/triste.png'; // muda a expressão do bot
  barra_chat_update = true; // pode atualizar a barra
  all_chat +=  pergunta_user+"<div class='balao_bot'><span class='name'>Chatbot</span><br>"+bot_resposta+" "+imagem+"</div>";
  // Atualiza o Chat 
 break;



		 case 7:
		    /**  LIMPAR CONVERSA **/
		 all_chat = ""; 
		 all_chat += "<div class='balao_bot'><span class='name'>Chatbot</span><br>Selecione uma das opções abaixo:</div>"+menu; 
	     bot.src = 'imgs/normal.png'; // muda a expressão do bot
	     break;
    
	   case 8:
	          /** Chama a função de Menu **/
	   all_chat += "<div class='balao_bot'><span class='name'>Chatbot</span><br>Selecione uma das opções abaixo:</div>"+menu; 
	   bot.src = 'imgs/normal.png'; // muda a expressão do bot
       barra_chat_update = true; // pode atualizar a barra
	   break;



 }; // end switch
  



 



//Mostra o resultado na tela  
document.querySelector('.saida').innerHTML =  all_chat; 
 
 
/** ATUALIZA A BARRA PRA BAIXO **/  
if(barra_chat_update==true){
var chat = document.querySelector(".chat");// pega a div do chat  
chat.scrollTop = '10000'; //coloca a barra embaixo
barra_chat_update = false; //pare de atualizar a barra por enquanto.
 } 
 



}//end assunto function 
 