
function calculate(){
    //var medida = document.getElementsByName('radiomedidas');
    var area = document.getElementById("valorA").value;

    var lado = document.getElementById("valorB").value;

    var altura = document.getElementById("valorAlt").value;

    var resposta = (area*lado)*altura
    let res = document.getElementById('res')

    res.innerHTML = `O volume é ${resposta}cm²`
    

    /*if(medida[0].cheked){
        alert('deu certo ')
    }else{
        alert('deu NÃO')
    }*/

}

function calculaCilindro(){
    
    var pi = 3.14;
    var r = document.getElementById("valorR").value;
    var h = document.getElementById("valorAlt").value;

    var resCilindro = document.getElementById("resCilindro");

    var result = (3.14*(r**2))*h;

    resCilindro.innerHTML = `O volume é ${result}cm²`
}
