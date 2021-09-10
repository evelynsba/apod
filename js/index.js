
var botao = document.getElementById("button");
var mostrarImagem = document.getElementById("img");

botao.addEventListener('click', function(){

    var inputDate = document.getElementById("date").value;
    var requisicao = new XMLHttpRequest();

    requisicao.open("GET", `https://api.nasa.gov/planetary/apod?api_key=lB2elxfRJvUK2Dyf05oFQZ37dT28aCbOeDdhD4no&date=${inputDate}`);


    requisicao.addEventListener("load", function(){
        if(requisicao.status ==200){
            response = requisicao.response;
            responseObj = JSON.parse(response);
            mostrar(responseObj);

        }
        else{
            console.log("erro")
        }
    })

    requisicao.send();
});

function mostrar(object){
    mostrarImagem.innerHTML = `<p>${object.explanation}</p>
    <img src="${object.url}" alt="">`
}

