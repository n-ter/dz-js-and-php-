window.onload = function(){

    var btnRun = document.getElementById('btnRun');

    btnRun.onclick = function (){
        var inpX = document.getElementById('inpX');
        var inpY = document.getElementById('inpY');
        var spnResult = document.getElementById('spnResult');
  
        spnResult.innerHTML =  parseFloat(inpX.value)+parseFloat(inpY.value);

        var inpZ = document.getElementById('inpZ');
        var inpC = document.getElementById('inpC');
        var spResult = document.getElementById('spResult');
       
        spResult.innerHTML =  parseFloat(inpZ.value)-parseFloat(inpC.value);

        var inpXX = document.getElementById('inpXX');
        var inpYY = document.getElementById('inpYY');
        var spnNResult = document.getElementById('spnNResult');
       
        spnNResult.innerHTML =  parseFloat(inpXX.value)*parseFloat(inpYY.value);

        var inpZZ = document.getElementById('inpZZ');
        var inpCC = document.getElementById('inpCC');
        var spRResult = document.getElementById('spnRResult');
       
        spnRResult.innerHTML =  parseFloat(inpZZ.value)/parseFloat(inpCC.value);
    }
}