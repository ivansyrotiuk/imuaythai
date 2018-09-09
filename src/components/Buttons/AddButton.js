import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

export default class AddButton extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        const { tooltip, onClick } = this.props;
        return (
            <React.Fragment>
                <button id="AddButton" type="button" className="btn btn-link btn-sm" onClick={onClick}>
                    <i className="fa fa-plus fa-1x" aria-hidden="true" />
                </button>
                <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="AddButton" toggle={this.toggle}>
                    {tooltip}
                </Tooltip>
            </React.Fragment>
        );
    }
}
