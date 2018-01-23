import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

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
                                events={this.props.events}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
