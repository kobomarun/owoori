function checkBusisness(){
  if (document.verify.phone.value == "") {
    alert("Please Enter Business Phone Number.");
    document.verify.phone.focus();
  }
  else
  {
    //disable loginButton
    $("#submitButton").attr("disabled","disabled");
    //check if there is data connection
    var networkState =  navigator.onLine;
    if (networkState == false){
      navigator.notification.alert("Check your internet connection");
    } else {


      var phone = $('#phone').val();
      console.log(phone);
      $.ajax({
        type: 'POST',
        crossDomain: true,
        url: 'http://oshodibusinessconnect.com/Api/pipeline/checkBusisnessExist',
        data: {
        phone : phone,
      },
      beforeSend : function() {$.mobile.loading('show')},
      complete   : function() {$.mobile.loading('hide')},
      dataType: 'json',
      success: function(response){
      console.log(response);
      if(response !== 'error') {
      //set user details in localStorage
      localStorage.setItem("bphone",response['phone']);
      localStorage.setItem("bname",response['bname']);
      localStorage.setItem("baddress",response['address']);
      localStorage.setItem("ccity",response['city']);

      location.href='tariff-payment2.html';
    } else {
      alert("This phone number is not registered with any business");
    }

      },
      error: function(response) {
        console.log(response);
      }
    });
    return false;
    //});
  }}
}

var newV;

function onChange(e) {
	var value = document.getElementById("tariff").value

newV = e.options[e.selectedIndex].value
  var splitValue = newV.split(":");
  var tariffAmount = document.getElementById("amount").value=splitValue[0];
  var tariffName = document.getElementById("tariffName").value=splitValue[1];
  localStorage.setItem('tariffName', tariffName);
  localStorage.setItem('tariffAmount', tariffAmount);
console.log(splitValue[1]);
}
function onChange2(e) {
	var value = document.getElementById("tariff2").value

newV = e.options[e.selectedIndex].value
  var splitValue = newV.split(":");
  var tariffAmount = document.getElementById("amount2").value=splitValue[0];
  var tariffName = document.getElementById("tariffName2").value=splitValue[1];
  localStorage.setItem('tariffName2', tariffName);
  localStorage.setItem('tariffAmount2', tariffAmount);
console.log(splitValue[1]);
}
function onChange3(e) {
	var value = document.getElementById("tariff3").value

newV = e.options[e.selectedIndex].value
  var splitValue = newV.split(":");
  var tariffAmount = document.getElementById("amount3").value=splitValue[0];
  var tariffName = document.getElementById("tariffName3").value=splitValue[1];
  localStorage.setItem('tariffName', tariffName);
  localStorage.setItem('tariffAmount', tariffAmount);
console.log(splitValue[1]);
}

function Payment() {
	var confirmPayment = confirm("Are you sure?");
	if(confirmPayment) {
    tname = localStorage.getItem('tariffName') + ","+localStorage.getItem('tariffName')+","+localStorage.getItem('tariffName');
    //tamount = parseInt(document.getElementById('amount').value + document.getElementById('amount2').value+document.getElementById('amount3').value);
    bname = localStorage.getItem('bname');
    tamount = 2450;
    bphone = localStorage.getItem('bphone');
    officerid = localStorage.getItem('id');
    lg = localStorage.getItem('lg');
    //pmethod = document.getElementById('pmethod').value;
    //ptype = document.getElementById('ptype').value;

    form_data = {
      'tname': tname,
      'tamount': tamount,
      'bname': bname,
      'bphone': bphone,
      //'p_method':pmethod,
      'officer_id':officerid,
      //'ptype':'ptype',
      'lg':lg
    }

    $.ajax({
      type: 'POST',
      crossDomain: true,
      url: 'http://oshodibusinessconnect.com/Api/pipeline/addPayment',
      data: form_data,
    beforeSend : function() {$.mobile.loading('show')},
    complete   : function() {$.mobile.loading('hide')},
    dataType: 'json',
    success: function(response){
    console.log("hello",response);
    if(response == "true") {

    location.href='sucess.html';
  } else {
    alert("Something went Wrong. Try Again");
  }

    },
    error: function(response) {
      console.log(response);
    }
  });
  return false;

	} else {

	}
}


function getAllTariff() {
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
  $.ajax({
          type: "post",
          url: "http://oshodibusinessconnect.com/Api/pipeline/getAllTariff",
          beforeSend : function() {$.mobile.loading('show')},
          complete   : function() {$.mobile.loading('hide')},
          success: function(response) {
            if(response!=='') {
              document.getElementById("tariff").innerHTML=response;
              document.getElementById("tariff2").innerHTML=response;
              document.getElementById("tariff3").innerHTML=response;

            } else {
              alert("No Tariff Found");
            }

          },
          error: function(response) {
            console.log(response);
          }
        });
      }
}

// function getAllTariff() {
//   var networkState =  navigator.onLine;
//   if (networkState == false){
//     navigator.notification.alert("Check your internet connection");
//   } else {
//   $.ajax({
//           type: "post",
//           url: "http://oshodibusinessconnect.com/Api/pipeline/getAllTariff",
//           beforeSend : function() {$.mobile.loading('show')},
//           complete   : function() {$.mobile.loading('hide')},
//           success: function(response) {
//             if(response!=='') {
//               document.getElementById("tariff").innerHTML=response;
//             } else {
//               alert("No Tariff Found");
//             }
//
//           },
//           error: function(response) {
//             console.log(response);
//           }
//         });
//       }
// }
