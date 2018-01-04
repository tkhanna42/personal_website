 $(document).ready(function() {
  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem);
   
  $(".sidenav > li > a").click(function() {
     instance.close();
   });
 });