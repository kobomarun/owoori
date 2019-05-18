function validationcheck(){
  if (document.mylogin.username.value == "") {
    navigator.notification.alert("Please Enter Your Phone Number.");
    document.mylogin.username.focus();
  } else if (document.mylogin.password.value == "") {
    navigator.notification.alert("Please Enter Password.");
    document.mylogin.password.focus();
  }
  else
  {
    //disable loginButton
    document.getElementById("submitButton").innerHTML="Checking .....";
    $("#submitButton",form).attr("disabled","disabled");
    //check if there is data connection
    var networkState =  navigator.onLine;
    if (networkState == false){
      navigator.notification.alert("Check your internet connection");
    } else {
      //$(function(){
      var Username = $('#username').val();
      var Password = $('#password').val();

      $.ajax({
        type: 'POST',
        crossDomain: true,
        url: 'http://oshodibusinessconnect.com/Api/pipeline/login',
        data: {
        username : Username,
        pass : Password
      },
      beforeSend : function() {$.mobile.loading('show')},
      complete   : function() {$.mobile.loading('hide')},
      dataType: 'json',
      success: function(response){
      console.log(response);
      if(response !== 'error') {
      //set user details in localStorage
      localStorage.setItem("phone",response['phone']);
      localStorage.setItem("id",response['id']);
      localStorage.setItem("name",response['name']);
      localStorage.setItem("b_description",response['description']);
      localStorage.setItem("email",response['email']);
      localStorage.setItem("bname",response['bname']);
      localStorage.setItem("ctotal",response['ctotal']);
      localStorage.setItem("cowe",response['cowe']);
      localStorage.setItem("dtotal",response['dtotal']);
      localStorage.setItem("isLogin",response['isLoggedIn']);
      localStorage.setItem("type",response['type']);
      localStorage.setItem("img",response['img']);

      if(response['type'] == 1) {
      location.href='dashboard.html';
    } else {
      location.href='customer-dash.html';
    }
    } else {
      alert("Wrong Phone Number or Password");
      document.getElementById("submitButton").innerHTML="Login to your Account";

    }

      },
      error: function(response) {
        console.log(response);
        alert("Something Went Wrong");
        document.getElementById("submitButton").innerHTML="Login to your Account";

      }
    });
    return false;
    //});
  }}
}

function forgotPassword() {
  document.getElementById("fp").innerHTML="Checking .....";
  var email = document.getElementById('email').value;
  var networkState =  navigator.onLine;
  if(email == '') {
    alert('Please enter your email');
  } else if(networkState == false) {
    navigator.notification.alert("Check your internet connection");
  } else  {
    $.ajax({
      type: 'POST',
      crossDomain: true,
      url: 'http://oshodibusinessconnect.com/Api/pipeline/forgotpassword',
      data: {
      email : email
    },
    beforeSend : function() {$.mobile.loading('show')},
    complete   : function() {$.mobile.loading('hide')},
    dataType: 'json',
    success: function(response){
    console.log(response);
    if(response.responseText === 'success') {
    //set user details in localStorage
    alert("Temporary Password has been sent to your email. Please check your email.");
    location.href="index.html"

  } else {
    alert("Error!!! We can't find your email in our database");
    document.getElementById("fp").innerHTML="Send Password";

  }

    },
    error: function(response) {
      if(response.responseText === 'success') {
      //set user details in localStorage
      alert("Temporary Password has been sent to your email. Please check your email.");
      location.href="index.html"

    } else {
      alert("Error!!! We can't find your email in our database");
      document.getElementById("fp").innerHTML="Send Password";

    }
    }
  })
  }
}
