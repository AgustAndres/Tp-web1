document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      defaultDate: '2019-11-22',
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      events: [
        
        {
          title: 'Curso java',
          start: '2019-11-22',
          end: '2019-11-24'
        },
        {
          title: 'Curso python',
          start: '2019-11-20T20:00:00'
        },
        {
          title: 'Curso React',
          start: '2019-11-28',
          end: '2019-11-30'
        },

        {
          title: 'Curso PHP',
          start: '2019-11-22',
          end: '2019-11-24'
        },

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2019-08-11T10:00:00',
          end: '2019-08-11T16:00:00',
          rendering: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2019-08-13T10:00:00',
          end: '2019-08-13T16:00:00',
          rendering: 'background'
        }

        // red areas where no events can be dropped
        
      ]
    });

    calendar.render();
  });