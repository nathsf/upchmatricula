jQuery(document).ready(function($){
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
  if (agentID) {     
      window.addEventListener('DOMContentLoaded',function() {
          $("body").addClass('iphone');
     });     
  }
  else
  {
      $(document).ready(function () {
        $("#main-wrapper").addClass('default');
      });
  }
});

jQuery(function($) {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $("button").hover(function() {
    $(".tooltip").attr('data-color', $(this).data("color"));
  });

  $("span").hover(function() {
    $(".tooltip").attr('data-color', $(this).data("color"));
  });

  $("button.change-btn").on('click', function(){
      $('#myPopover').hide();
  });
  
  $('#datepicker').datepicker();

  $('.switch-input').on('click', function () {
    $('.seguro').toggleClass('switch_off');
    if($('.seguro').hasClass('switch_off')) {
        $('.seguro').hide();
        $('.no_seguro').show();
    }        
    else {
        $('.no_seguro').hide();
        $('.seguro').show();
        if( $('.upch-seguro').is(':checked') ){  
          $('div.form-seguro').show();
          $("div.form-seguro input").prop('disabled', true);
          $("div.form-seguro select").prop('disabled', true);
          $("label.file").addClass("disabled");
          
      }
    }
});
$('.custom-radio.form-seguro').on('click', function() {
  $('div.form-seguro').show();
  $("div.form-seguro input").prop('disabled', false);
  $("div.form-seguro select").prop('disabled', false);
  $("label.file").removeClass("disabled");
})
$('.custom-radio.upch-seguro').on('click', function() {
  $('div.form-seguro').show();
  $("div.form-seguro input").prop('disabled', true);
  $("div.form-seguro select").prop('disabled', true);
  $("label.file").addClass("disabled");
})


$("[type=file]").on("change", function () {
  var file = this.files[0];
  var formdata = new FormData();
  formdata.append("file", file);
  
  if (file.type != "") {
    $("#type span").empty().append(file.type);
  } else {
    $("#type span").empty().append("Unknown");
  }
  if (file.name.length >= 30) {
    $("label.file").text("Archivo : " + file.name.substr(0, 30) + "..");
  } else {
    $("label.file").text("Archivo : " + file.name);
  }

  var ext = $("#file").val().split(".").pop().toLowerCase();
  if ($.inArray(ext, ["php", "html"]) !== -1) {
    $("#info").hide();
    $("label.file").text("Seleccionar Archivo");
    $("#file").val("");
    alert("This file extension is not allowed!");
  }
});


});

//reloj tiempo real
setInterval(function() {

    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentSeconds = date.getSeconds();

    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;


    svg = ` <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.525 10.2857H11.7625V12.5071L13.7755 13.6178L13.1568 14.6419L10.525 13.1924V10.2857ZM13.825 6.3471H2.275V15.0121H6.12775C5.773 14.2953 5.575 13.4918 5.575 12.6489C5.575 11.1865 6.18344 9.78396 7.26646 8.74987C8.34948 7.71577 9.81837 7.13483 11.35 7.13483C12.2327 7.13483 13.0742 7.32388 13.825 7.6626V6.3471ZM2.275 16.5876C1.35925 16.5876 0.625 15.8786 0.625 15.0121V3.98392C0.625 3.10954 1.35925 2.40846 2.275 2.40846H3.1V0.833008H4.75V2.40846H11.35V0.833008H13V2.40846H13.825C14.2626 2.40846 14.6823 2.57445 14.9917 2.8699C15.3012 3.16536 15.475 3.56608 15.475 3.98392V8.78905C16.498 9.78159 17.125 11.1444 17.125 12.6489C17.125 14.1113 16.5166 15.5139 15.4335 16.548C14.3505 17.5821 12.8816 18.163 11.35 18.163C9.77425 18.163 8.347 17.5643 7.3075 16.5876H2.275ZM11.35 8.82844C10.2888 8.82844 9.27107 9.23095 8.52069 9.94743C7.77031 10.6639 7.34875 11.6357 7.34875 12.6489C7.34875 14.76 9.139 16.4694 11.35 16.4694C11.8755 16.4694 12.3958 16.3706 12.8812 16.1786C13.3667 15.9866 13.8078 15.7052 14.1793 15.3504C14.5509 14.9956 14.8456 14.5745 15.0467 14.111C15.2478 13.6474 15.3513 13.1506 15.3513 12.6489C15.3513 10.5378 13.561 8.82844 11.35 8.82844Z" fill="#2F2F2F"/>
    </svg>    
    
    `;
    $('#clock-wrapper').html(svg + ' ' + ((''+day).length<2 ? '0' : '') + day + '/'  + ((''+month).length<2 ? '0' : '') + month + '/' + date.getFullYear() + ' &nbsp; ' + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay
        );
}, 500);


