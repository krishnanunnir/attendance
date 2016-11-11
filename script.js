
	var total;
    var absent1=[];
    function myFunc(num_buttons) {
	var target_div="#seat";
    var buttons="<p id='rollnumhead'>Roll Numbers</p>",i;
    for ( i=0; i<num_buttons; i++ ) {
        buttons += '<input type="button" id="button_'+i+'" class="rollbtn mdl-button mdl-js-button mdl-button--raised mdl-button--colored" value="'+(i+1)+'"></input>';
    }
    $(target_div).append( buttons );
    var doButtonPress = function( i ) {
      //  alert( i ); 
    }

    $('.rollbtn').click(function () {   
         var e = event||window.event,
         btn=e.target||e.srcElement;
         //alert(btn.value);

        $(btn).css("background-color","red"); 
         absent1.push(btn.value);
    });
}

function absentees(){

  var rollabsent="<div id='success'><h4>The absentees are "+absent1.toString()+"</h4></div>";
  //alert(rollabsent);
  $("body").append(rollabsent);

}
//var lastpage=location.href='./markatt.html';
$(document).ready(function() {
    $('#showroll').click(function() {
      $("#form1").hide();
      $("#finish").css("visibility","visible");
      total=$('#totnum').val();



      myFunc(total);
      });
    
    $("#finish").click(function(){
      //alert(absent1);
    $(".rollbtn").hide();
           $("#finish").hide();
                      $("#rollnumhead").hide();

           $("absentroll").show();
           $("body").css("background-color","#4db6ac");
           $("body").append("<div id='success'><h1 id='success'>Success</h1><h4>You have successfully submitted your attendance.</h4>");
           absentees();


    });
});



