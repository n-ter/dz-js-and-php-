$(document).ready(function() {      

$("input[name=send]").click( function () { 

var action = $("select[name=action]").val(); 

var first = $("input[name=first]").val() * 1; 

var second = $("input[name=second]").val() * 1; 

var result; 

if (action == '+') { 

result = first + second; 

}

else if (action == '-'){ 

result = first - second; 

}

else if (action == '*'){ 

result = first * second; 

}

else if (action == '/'){ 

result = first / second; 

}

$("input[name=result]").val(result);

});

});
$('#objID').css('display','block')
$('#objID').css({
    display:'block,
    margin:'10px',
    color:'#ffffff'
})
