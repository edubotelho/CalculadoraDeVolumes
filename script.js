
function calculate(){
    //var medida = document.getElementsByName('radiomedidas');
    var area = document.getElementById("valorA").value;

    var lado = document.getElementById("valorB").value;

    var altura = document.getElementById("valorh").value;

    var resposta = (area*lado)*altura
    var res = document.getElementById('res')

    res.innerHTML = `O volume é ${resposta}cm²`
    

    /*if(medida[0].cheked){
        alert('deu certo ')
    }else{
        alert('deu NÃO')
    }*/



}
