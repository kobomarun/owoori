
document.getElementById('dispic').style = "display:none";

document.getElementById('fname').innerHTML = localStorage.getItem('name');
$('#lname').html(localStorage.getItem('name'));
$('#id').html(localStorage.getItem('id')+Math.random());
$('#phone').html(localStorage.getItem('phone'));
$('#bname').html(localStorage.getItem('bname'));
$('#description').val(localStorage.getItem('b_description'));
var avatar = localStorage.getItem('img');
var fakeAvatar = 'https//oshodibusinessconnect.com/assets/images/avatar_.png';
if(avatar === '') {
  $("#dp").attr("src",'https://png.pngtree.com/svg/20161027/service_default_avatar_182956.png');
} else {
  $("#dp").attr("src",avatar);
}


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

function loadForm() {
  document.getElementById('dispic').style = "display:block";
  document.getElementById('changedp').style = "display:none";

}

function changeMyDp() {
  var phone = localStorage.getItem('phone');
  var myForm = document.getElementById('prod');
  var file_name = document.getElementById("userfile").value;

  var formData = new FormData(myForm);

   form_data = {
    'file_name': file_name,
    'phone': phone
    }
  var networkState =  navigator.onLine;
  if (networkState == false){
    navigator.notification.alert("Check your internet connection");
  } else {
    $.ajax({
            type:"post",
            url: "http://oshodibusinessconnect.com/Api/site/updatedp",
            data: formData,
            dataType: "html",
          contentType: false,
          cache: false,
          processData: false,
            beforeSend : function() {$.mobile.loading('show')},
            complete   : function() {$.mobile.loading('hide')},
            success: function(response) {

              if(response == "successful") {
                console.log(response);
                alert("Profile Picture Uploaded Successfully");
                location.href="customer-profile.html";
              } else if(response == 'pic-error') {
                console.log(response);
                alert("Something went wrong. Please check the Image you uploaded");
                btn.innerHTML = "Change ";
              }  else if(response == 'error'){
                console.log(response);
                alert("Something went wrong. Try again later");
                btn.innerHTML = "Change";
              }
            }
          });
  }
}
