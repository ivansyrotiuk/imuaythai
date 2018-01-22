import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

const events = [
    {
        title: 'All Day Event',
        start: '2018-01-21'
    },
    {
        title: 'Long Event',
        start: '2017-05-07',
        end: '2017-05-10'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: '2017-05-09T16:00:00'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: '2017-05-16T16:00:00'
    },
    {
        title: 'Conference',
        start: '2017-05-11',
        end: '2017-05-13'
    },
    {
        title: 'Meeting',
        start: '2017-05-12T10:30:00',
        end: '2017-05-12T12:30:00'
    },
    {
        title: 'Birthday Party',
        start: '2017-05-13T07:00:00'
    },
    {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-05-28'
    }
];

class Dashboard extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="card">
                        <div className="card-header">Contest events</div>
                        <div className="card-block">
                            <FullCalendar
                                id="your-custom-ID"
                                header={{
                                    left: 'prev,next today myCustomButton',
                                    center: 'title',
                                    right: 'month,basicWeek,basicDay'
                                }}
                                defaultDate={new Date()}
                                navLinks={true} // can click day/week names to navigate views
                                editable={true}
                                eventLimit={true} // allow "more" link when too many events
                                events={events}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
