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
