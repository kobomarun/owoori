if(localStorage.getItem("isLogin") == "true") {
  document.getElementById('auth').innerHTML = "Signout";
}

function checkIfLogin() {
  if(localStorage.getItem("isLogin") == "true") {
    addProducts();
  } else {
    register();
  }
}

function getProducts() {
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
  $.ajax({
      type: "get",
      url: "http://oshodibusinessconnect.com/Api/Site/getProducts",
      beforeSend : function() {$.mobile.loading('show')},
      complete   : function() {$.mobile.loading('hide')},
      success: function(response) {
        console.log(response);
        if(response!=='') {
          document.getElementById("content").innerHTML=response;
        } else {
          alert("No Buisness Listings Found");
        }

      },
      error: function(response) {
        console.log(response);
      }
    });
  }
}

function register() {
  location.href='business-registration.html'
  return false;
}

function addProducts() {
  alert('add products');
  return false;
}

function getListings() {
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
  $.ajax({
      type: "get",
      url: "http://oshodibusinessconnect.com/Api/Site/getListings",
      beforeSend : function() {$.mobile.loading('show')},
      complete   : function() {$.mobile.loading('hide')},
      success: function(response) {
        console.log(response);
        if(response!=='') {
          document.getElementById("content").innerHTML=response;
        } else {
          alert("No Buisness Listings Found");
        }

      },
      error: function(response) {
        console.log(response);
      }
    });
  }
}
