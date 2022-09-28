$(document).ready(function(){  

// admin panel 

$("#admin-panel-btn").click(function(){
    $("#contLogin").css("display","flex");
    $(".notice-board-cont").css("display","none");
    $("#admin-panel-btn").css("display","none");
    $("body").css("background-image","background-image: radial-gradient(circle, #051937, #00236a, #00289e, #0026d1, #0001ff)");
 });

// admin login 

const username = document.getElementById("username");
const password = document.getElementById("password");

$("#login").click(function(){  

    if((username.value == "admin")&&(password.value == "123")){

        $(".log-out").css("display","flex");
        $("#notice-board-heading").addClass("pt-5");
        $("#contLogin").css("display","none");
        $(".card-footer").css("display","inline-block");
        $(".form-open").css("display","block");
        $(".notice-board-cont").css("display","");
    }
    else if((username.value == "")||(password.value == "")){
        alert("username or password cant be empty");
    }
    else{
        alert("incorrect username or password");
    }

})

$(".log-out").click(function(){  
    $(".log-out").css("display","none");
    $("#admin-panel-btn").css("display","flex");
    $(".card-footer").css("display","none");
    $(".form-open").css("display","none");

})

const events = document.getElementById("events");
const form = document.getElementById("form");

const eHeading = document.getElementById("event-heading");
const eInfo = document.getElementById("event-info");
const eimgUrl = document.getElementById("event-img-url");
const clear = document.getElementById("clear");


$("#add-event").click(function(){

    events.innerHTML += `

    <div class="col" id="col">
    <div class="card h-100">
      <img src="`+  eimgUrl.value +`" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title editable">`+ eHeading.value +`</h5>
        <p class="card-text editable">`+ eInfo.value  +`</p>
      </div>
      <div class="card-footer bg-transparent" id="edit-delete-btn" style="display: inline-block;">
          <button class="btn btn-warning mx-1 edit">edit</button>
          <button class="btn btn-danger mx-1 delete">delete</button>
      </div>
    </div>
  </div>
    
    `
    $("#close-btn").trigger("click");

})

$("#clear").click(function(){
    form.reset();
 });

$(document).on("click",".delete",function() {
    $(this).parent().parent().parent().remove().remove().remove().remove();
});

$(document).on("click","h5.edit p.editable",function(){

    


    
    $(this).editable.contentEditable = true;

})









})








