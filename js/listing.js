function getAllBusiness() {
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
  $.ajax({
          type: "get",
          url: "http://oshodibusinessconnect.com/Api/pipeline/getBusinessListing",
          beforeSend : function() {$.mobile.loading('show')},
          complete   : function() {$.mobile.loading('hide')},
          success: function(response) {
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

function getNews() {
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
  $.ajax({
          type: "get",
          url: "http://oshodibusinessconnect.com/Api/pipeline/getNews",
          beforeSend : function() {$.mobile.loading('show')},
          complete   : function() {$.mobile.loading('hide')},
          success: function(response) {
            if(response!=='') {
              document.getElementById("content").innerHTML=response;
            } else {
              alert("No News Found");
            }

          },
          error: function(response) {
            console.log(response);
          }
        });
      }
}

function getBusinessDetails(e) {
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
  $.ajax({
          type: "post",
          url: "http://oshodibusinessconnect.com/Api/pipeline/getBusinessDetails",
          data: {
            id: e
          },
          beforeSend : function() {$.mobile.loading('show')},
          complete   : function() {$.mobile.loading('hide')},
          success: function(response) {
            if(response!=='') {
              document.getElementById("content").style='display:none';
              document.getElementById("head").innerHTML=response;
            } else {
              alert("Business details not found");
            }

          },
          error: function(response) {
            console.log(response);
          }
        });
      }
}
