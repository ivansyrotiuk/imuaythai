import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import Avatar from 'react-avatar';

class HeaderDropdown extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav>
                <DropdownToggle nav>
                    <Avatar
                        size={40}
                        name={this.props.user.firstname + ' ' + this.props.user.surname}
                        src={this.props.user.photo}
                        className="float-left"
                    />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header tag="div" className="text-center">
                        <strong>Account</strong>
                    </DropdownItem>
                    <DropdownItem onClick={this.props.gotoProfile}>
                        <i className="fa fa-user" /> Profile
                    </DropdownItem>
                    <DropdownItem>
                        <i className="fa fa-wrench" /> Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.props.logout}>
                        <i className="fa fa-lock" /> Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default HeaderDropdown;
