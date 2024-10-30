function clickValue(val){
    document.getElementById("screen").value+=val;
}

function equalValue(){
    var operation = document.getElementById("screen").value;
    var result = eval(operation);
    console.log(result);
    document.getElementById("screen").value = result;
}

function clearValue(){
    document.getElementById("screen").value = "";
}