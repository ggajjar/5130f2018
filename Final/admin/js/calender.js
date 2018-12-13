jQuery(document).ready(function() {
        
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            defaultDate: '2018-12-11',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-12-01'
                },
                {
                    title: 'Long Event',
                    start: '2018-12-06',
                    end: '2018-12-09'
                },
                {
                    title: 'Conference',
                    start: '2016-12-11',
                    end: '2016-12-13'
                },
				{
                    title: 'Project Presentation',
                    start: '2018-12-11T17:30:00',
                    end: '2018-12-11T20:00:00'
                },
                {
                    title: 'Faculty Meeting',
                    start: '2018-12-12T10:15:00',
                    end: '2018-12-12T11:15:00'
                },
                {
                    title: 'Office Hours',
                    start: '2018-12-12T14:00:00',
                    end: '2018-12-12T15:00:00'
                },
                {
                    title: 'Lecture',
                    start: '2018-12-12T17:30:00',
                    end: '2018-12-12T20:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2018-12-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2018-12-12T20:00:00'
                },
                {
                    title: 'Last Day',
                    start: '2018-12-13'
                },
                
            ]
        });
        
    });