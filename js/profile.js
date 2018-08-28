

document.getElementById('fname').innerHTML = localStorage.getItem('name');
$('#lname').html(localStorage.getItem('name'));
$('#id').html(localStorage.getItem('id'));
$('#phone').html(localStorage.getItem('phone'));
$('#bname').html(localStorage.getItem('bname'));
$('#description').val(localStorage.getItem('b_description'));


function updateDescription() {
  var description = document.getElementById('description').value;
  var phone = localStorage.getItem('phone');
  var updateBtn = document.getElementById('btn');
  updateBtn.innerHTML = 'Updating......';

  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
    updateBtn.innerHTML = 'Update Description';
  } else {

    var form_data = {
      'phone':phone,
      'description':description
    }

  $.ajax({
          type: "post",
          url: "http://oshodibusinessconnect.com/Api/pipeline/updateDescription",
          data: form_data,
          beforeSend : function() {$.mobile.loading('show')},
          complete   : function() {$.mobile.loading('hide')},
          success: function(response) {

            if(response = 'true') {
              console.log(response);
              alert("You have Successfully Updated your Business Description");
              localStorage.removeItem('b_description')
              localStorage.setItem('b_description',description)
              location.href="customer-profile.html";
            }  else {
              alert("Error while adding to database Please try again");
              updateBtn.innerHTML = "Update Description ";
            }
          },
          error: function(response) {
            console.log(response);
          }
        });
      }

}
