var pertNum = 0;													
var pertanyaan = '<h1>Siapa Namamu?</h1>';				  

var output = document.getElementById('output');				
output.innerHTML = pertanyaan;											

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (pertNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    document.getElementById("input").value = "";   		
    pertanyaan = '<h1>Berapa Umurmu?</h1>';			    	
    setTimeout(timedQuestion, 2000);									
    }

    else if (pertNum == 1) {
    output.innerHTML = '<h1>Kamu Lahir pada tahun ' + (2018 - input) + '</h1>';
    document.getElementById("input").value = "";
    pertanyaan = '<h1>Apa Kabarmu?</h1>';
    setTimeout(timedQuestion, 2000);
    }

    else if (pertNum == 2) {
    output.innerHTML = '<h1>Oke :) </h1>';
    document.getElementById("input").value = "";
    pertanyaan = '<h1>Ukuran Sepatumu Berapa?</h1>';
    setTimeout(timedQuestion, 2000);
    }
}

function timedQuestion() {
    output.innerHTML = pertanyaan;
}

$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						
    pertNum++;																		
  }
});
