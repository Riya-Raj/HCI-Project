$(document).ready(function(){

    //Using JavaScript for modal toggling
    $('#showLoginModal').click(function(){
        $('#loginModal').modal('show');
    });
    $('#dismissLoginModal').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#dismissLoginModal2').click(function(){
        $('#loginModal').modal('hide');
    });
});