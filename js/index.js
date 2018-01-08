$(document).ready(function() {
   
   
  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem);
   
   var elem2 = document.querySelector('.carousel');
  var instance2 = M.Carousel.init(elem2, {
    // fullWidth: true,
    // indicators: true
  });

   
  $(".sidenav > li > a").click(function() {
     instance.close();
   });
  
  $("#sendMessage").click(function () {
    emailObj = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      message: $("#message").val()
    };
    sendEmail(emailObj);
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#message").val("");
    
  });
 });

function sendEmail(email) {
  $.post("https://immense-crag-40818.herokuapp.com/email", email, function () {
    $("#messageForm").empty();
    $("#messageForm").append(`
      <h1><span class="light-blue-text text-accent-4">Sent!</span></h1>
      <p> I'll get back to <span class="light-blue-text text-accent-4">you</span> ASAP</p>
    `);
  });
}