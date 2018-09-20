
var fname = localStorage.getItem('name');
var lname = localStorage.getItem('lname');
var phone = localStorage.getItem('phone');
var ctotal = localStorage.getItem('ctotal');
var cowe = localStorage.getItem('cowe');
var dtotal = localStorage.getItem('dtotal');

var fullName = fname;
 $('#name').html(fullName);
 $('#phone').html(phone);
 if(cowe == 0) {
 $('#ctotal').html("N"+ctotal);
 $('#cowe').html("N"+cowe);
} else {
  $('#ctotal').html("N0.00");
  $('#cowe').html("N"+cowe);
}
  $('#dtotal').html("N"+dtotal);

   function showConfirm() {

    confirmed = function(buttonIndex) { if(buttonIndex == 1) { console.log("navigator.app.exitApp"); navigator.app.exitApp(); } }

    navigator.notification.confirm('Exit App?', confirmed, 'Exit?');
  }
