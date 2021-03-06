import React, { Component } from 'react';
import UserAvatar from '../../components/Users/UserAvatar';
import { DragSource } from 'react-dnd';
import { collect, judgeDragSource } from './JudgeDragSource';
import dragTypes from '../../common/dragTypes';

export class Judge extends Component {
    render() {
        const { judgeRequest, isDragging, connectDragSource } = this.props;

        return connectDragSource(
            <div className="row">
                <div className="col-md-auto">
                    <UserAvatar size={50} user={judgeRequest.user} />
                </div>
                <div className="col">
                    <div className="h4">{judgeRequest.user.firstname + ' ' + judgeRequest.user.surname}</div>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {judgeRequest.user.gymName || 'No gym'}, {judgeRequest.user.countryName}
                    </h6>
                </div>
            </div>
        );
    }
}

export default DragSource(dragTypes.JUDGE, judgeDragSource, collect)(Judge);
