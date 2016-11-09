
	var total;
    var absent1=[];
    function myFunc(num_buttons) {
	var target_div="#seat";
    var buttons="",i;
    for ( i=0; i<num_buttons; i++ ) {
        buttons += '<input type="button" id="button_'+i+'" class="rollbtn" value="'+(i+1)+'"></input>';
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

  var rollabsent="<h1>Absentees</h1><h3>"+absent1.toString()+"</h3>";
  //alert(rollabsent);
  $("#absentroll").append(rollabsent);

}
//var lastpage=location.href='./markatt.html';
$(document).ready(function() {
    $('#showroll').click(function() {
      $("#form1").hide();
      $("#finish").css("visibility","visible");

      total=$('#totnum').val();
      //window.location.href = "markatt.html";
      myFunc(total);
      });
    
    $("#finish").click(function(){
      //alert(absent1);
    $(".rollbtn").hide();
           $("#finish").hide();
           $("absentroll").show();
           absentees();


    });
});



