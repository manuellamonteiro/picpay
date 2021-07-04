function soma() {
    let input1 = document.getElementById("input1").value;
    let conteudo = document.getElementById("conteudo");
  
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
  
    let data = new Date();
    let ano = data.getFullYear();
  
    let anoNascimento = ano - input1;
  
    if (anoNascimento <= 18) {
      conteudo.innerHTML = `${input2}  ${input3} A sua Idade é ${anoNascimento} - Menor de Idade 👶`;
    } else {
      conteudo.innerHTML = `${input2} A sua Idade é ${anoNascimento} - Maior de Idade`;
    }
  }
  