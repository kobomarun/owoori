var url =  "location.href='dashboard.html'";
var curl =  "location.href='customer-dash.html'";

if(localStorage.getItem("isLogin") == "true" && localStorage.getItem("type")== 1) {
  var div = "<p class='ui-icon-user ui-btn-icon-top' onclick="+url+">My Account</p>";
  document.getElementById('auth').innerHTML = div;
} else if(localStorage.getItem("isLogin") == "true" && localStorage.getItem("type")== 0) { 
  var div = "<p class='ui-icon-user ui-btn-icon-top' onclick="+curl+">My Account</p>";
  document.getElementById('auth').innerHTML = div;
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
  location.href='add-products.html'

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
