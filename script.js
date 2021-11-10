var Nome = prompt ("Qual é o seu Nome?");
document.write(Nome);
console.log(Nome);
 
d = new Date();
hour = d.getHours();
if(hour < 6){
   document.write(", Boa Noite");
   alert("Boa Noite");
} else if(hour < 12){
   document.write(", Bom Dia");
   alert("Bom Dia");
} else if(hour < 18){
   document.write(", Boa Tarde");
   alert("Boa Tarde");
} else{
   document.write(", Boa noite");
   alert("Boa Noite");
}