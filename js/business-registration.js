function registerBusiness() {
  if (document.register.bname.value == "") {
			alert("Please Enter Business Name");
			document.register.bname.focus();

		} else if (document.register.cname.value == "") {
  			alert("Please Contact Persons name");
  			document.register.cname.focus();
      }

  	 else if (document.register.phone.value == "") {
  			alert("Please Business Phone Number");
  			document.register.phone.focus();

  		}
    else if (document.register.pwd.value == "") {
        alert("Please Business Password");
        document.register.pwd.focus();

      } else {
  var btn = document.getElementById("submit");
  btn.innerHTML ="Saving.....";
  //btn.style="display:none"
  var bname = document.getElementById("bname").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var lg = document.getElementById("lg").value;
  var cat = document.getElementById("businessCategory").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var cname = document.getElementById("cname").value;
  var pwd = document.getElementById("pwd").value;
  var id = localStorage.getItem('id');


  var form_data = {
    'name': bname,
    'address': address,
    'city': city,
    'lg':lg,
    'email': email,
    'category': cat,
    'phone': phone,
    'cname':cname,
    'pwd':pwd
    }
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {

  $.ajax({
          type: "post",
          url: "http://oshodibusinessconnect.com/Api/pipeline/addBusiness",
          data: form_data,
          beforeSend : function() {$.mobile.loading('show')},
          complete   : function() {$.mobile.loading('hide')},
          success: function(response) {

            if(response == "true") {
              console.log(response);
              alert("You have Successfully added" + bname + " to Oshodi Business Connect");
              document.getElementById("bname").value ='';
              cname="";

              lg="";
              city="";
              location.href="home.html";
            } else if(response == 'error2') {
              console.log(response);
              alert("Error while adding to database Please try again");
              btn.innerHTML = "Register ";
            }  else if(response == 'error'){
              console.log(response);
              alert("Phone Number Already Exist");
              btn.innerHTML = "Register ";
            }
          }
        });
      }
    }

}
