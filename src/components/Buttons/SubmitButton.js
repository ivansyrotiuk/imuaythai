import React from 'react';
import classnames from 'classnames';

export default class SubmitButton extends React.Component {
    render() {
        const { submitting, disabled, onClick } = this.props;
        const classes = classnames('btn btn-primary', this.props.className);

        const spinner = <i className="fa fa-spinner fa-pulse fa-1x fa-fw" />;

        return (
            <button type="submit" disabled={disabled} onClick={onClick} className={classes}>
                {submitting && spinner}
                {this.props.children}
            </button>
        );
    }
}
