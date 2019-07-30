$(document).ready(() => {


    //* to show prices
 $('.clicked').on('click', event => {
 $(event.currentTarget).siblings().show();
})

  $('.price').on('mouseleave', () => {
    $('.price').hide()
})
//* to use admin priv

$('#button').on('click', event => {
    const password = $('#pass').val();
    if (password === 'iloveroti'){
      
      $('.buttonRemove').show();
      $('#addBox').show();
      $('#logout').show();
    }else {
      alert('Wrong password, please Try Again!')
      
      $('.buttonsRemove').hide();
      $('#addBox').hide();
      $('#logout').hide();
    }
      
})


//* edit button .. to show options
$('.buttonEdit').on('click', event =>{
  $(event.currentTarget).hide().siblings().show();
 })

//* remove button
$('.buttonRemove').on('click', event =>{
  $(event.currentTarget).closest('.add').show(); 
  $(event.currentTarget).closest('.box4').hide();
 
})

//* add Name Content still needs work
$('.add').on('click', () =>{
  let name = $('#newItem').input.val();
  let drinkName = $('.drinkName').innerHTML = "<h5>" + $name + "</h5>";
  let imgsrc= $('#newImage').val();
  let src= "<img=" + imgsrc + ">";
  ('.bigBox').append('<div class=box4>' + src + drinkName + "</div>")

   
  
    
    
  })

//* log out
$('#logout').on('click', () =>{
    alert('You can no longer edit this page, please log in again!');
      $('.buttonRemove').hide();
      $('.buttonEdit').hide();
      $('#addBox').hide();
      $('#logout').hide();
      $('#logIn').hide();
  })
  
;})