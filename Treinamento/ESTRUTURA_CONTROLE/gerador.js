function gerar() {//declaracao de funcao
    var qnt = 0;//define a variavel qnt como uma variavel numerica com valor 0
    var nums = []; //define um array vazio chamado nums (Array é uma variável que contém diversos valores indexados 
    while(qnt<6){ //Aqui dizemos que enquanto a variavel qnt tiver o valor menor que 6 rê-executamos o código
    var num = Math.round((Math.random()*100)+1); // Aqui usamos o Math.random para gerar um numero depois multiplicamos por 100 e somamos 1, após isso arredondamos o numero (Math.random gera numeros entre 0 e 1, por isso precisamos arredondar) e guardamos na variavel num
    if(num<60){//Aqui definimos que somente quando a variavel num tiver o valor menor do que 60 faremos o que está entre colchetes
     nums[qnt] = num; //aqui guardamos o numero sorteado dentro da posição correspondente ao numero sorteado Ex: sorteado: 1, posição: 3 resultado gerado: nums[3] = 1; 
     qnt = qnt+1; //elevamos o valor de qnt em 1 digito para podermos gerar um novo numero 
    }
   }
  // document.getElementById('num').innerHTML = nums[0]+" "+nums[1]+" "+nums[2]+" "+nums[3]+" "+nums[4]+" "+nums[5];//exibimos todos os números gerados
  //console.log(nums[0]+" "+nums[1]+" "+nums[2]+" "+nums[3]+" "+nums[4]+" "+nums[5])
return (nums[0]+" "+nums[1]+" "+nums[2]+" "+nums[3]+" "+nums[4]+" "+nums[5])
}

//console.log(nums[0]+" "+nums[1]+" "+nums[2]+" "+nums[3]+" "+nums[4]+" "+nums[5])
console.log(gerar)