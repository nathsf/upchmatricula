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


    svg = ` <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11.9167H13.5V14.5017L15.94 15.7942L15.19 16.9859L12 15.2992V11.9167ZM16 7.33341H2V17.4167H6.67C6.24 16.5826 6 15.6476 6 14.6667C6 12.9649 6.7375 11.3328 8.05025 10.1295C9.36301 8.92612 11.1435 8.25008 13 8.25008C14.07 8.25008 15.09 8.47008 16 8.86425V7.33341ZM2 19.2501C0.89 19.2501 0 18.4251 0 17.4167V4.58341C0 3.56591 0.89 2.75008 2 2.75008H3V0.916748H5V2.75008H13V0.916748H15V2.75008H16C16.5304 2.75008 17.0391 2.94324 17.4142 3.28705C17.7893 3.63087 18 4.09718 18 4.58341V10.1751C19.24 11.3301 20 12.9159 20 14.6667C20 16.3686 19.2625 18.0007 17.9497 19.204C16.637 20.4074 14.8565 21.0834 13 21.0834C11.09 21.0834 9.36 20.3867 8.1 19.2501H2ZM13 10.2209C11.7137 10.2209 10.4801 10.6893 9.57053 11.5231C8.66098 12.3568 8.15 13.4876 8.15 14.6667C8.15 17.1234 10.32 19.1126 13 19.1126C13.6369 19.1126 14.2676 18.9976 14.856 18.7742C15.4444 18.5507 15.9791 18.2233 16.4295 17.8104C16.8798 17.3976 17.2371 16.9075 17.4808 16.3681C17.7246 15.8287 17.85 15.2506 17.85 14.6667C17.85 12.2101 15.68 10.2209 13 10.2209Z" fill="black"/>
    </svg>    
    
    `;
    $('#clock-wrapper').html(svg + ' ' + ((''+day).length<2 ? '0' : '') + day + '/'  + ((''+month).length<2 ? '0' : '') + month + '/' + date.getFullYear() + ' &nbsp; ' + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay
        );
}, 500);