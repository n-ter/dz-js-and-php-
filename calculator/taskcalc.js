window.onload = function(){

    var btnRun = document.getElementById('btnRun');

    btnRun.onclick = function (){
        var inpX = document.getElementById('inpX');
        var inpY = document.getElementById('inpY');
        var spnResult = document.getElementById('spnResult');
        var x = parseFloat(inpX.value);
        var y = parseFloat(inpY.value);
        var r = x + y;
        spnResult.innerHTML =  r;

        var inpZ = document.getElementById('inpZ');
        var inpC = document.getElementById('inpC');
        var spResult = document.getElementById('spResult');
        var z = parseFloat(inpZ.value);
        var c = parseFloat(inpC.value);
        var rr = z - c;

        spResult.innerHTML =  rr;
        var inpXX = document.getElementById('inpXX');
        var inpYY = document.getElementById('inpYY');
        var spnNResult = document.getElementById('spnNResult');
        var xx = parseFloat(inpXX.value);
        var yy = parseFloat(inpYY.value);
        var re = xx * yy;
        
        spnNResult.innerHTML =  re;
        var inpZZ = document.getElementById('inpZZ');
        var inpCC = document.getElementById('inpCC');
        var spRResult = document.getElementById('spnRResult');
        var zz = parseFloat(inpZZ.value);
        var cc = parseFloat(inpCC.value);
        var rrr = zz / cc;
        spnRResult.innerHTML =  rrr;
    }
}