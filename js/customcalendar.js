document.addEventListener('DOMContentLoaded', function() {
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        initialViews = 'listWeek';
    }else{
        initialViews = 'timeGridWeek';
    }   
  
  var calendarEl = document.getElementById('calendar');
  var today = moment().day();
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    // locale: 'es',
    
      headerToolbar: {
            left: 'timeGridWeek,listWeek',
            center: '',
            right: 'prev,next'
      },
      
      buttonText:    {
      today:    'Today',
      // month:    'Mes',
      week:     'Semana',
      day:      'Día',
      list:     'Lista'
    },
      navLinks: true,
          firstDay: today,
          hiddenDays: [ 0 ],
          initialView: initialViews,
            editable: true,
            selectable: true, 
            unselectAuto:true,
            eventOverlap: false,
            eventColor: '#f16621', 
            slotDuration: '00:15',
            allDaySlot : false,
            eventStartEditable: false,
            eventDurationEditable:false,
            slotLabelInterval: "00:15",
            longPressDelay: 0,
            nowIndicator: "true", //indicator of current time
            slotMinTime: '07:00',
            slotMaxTime: '20:45',
            eventContent: function( arg ) {
          return { html: arg.event.title };
      },
 
      validRange: function(today) {
          return {
            start: today,
          };
        },
          events: 'https://fullcalendar.io/demo-events.json'
    });

    calendar.render();

    if ($(window).width() < 800) {
      calendar.changeView('listWeek');
    }
});