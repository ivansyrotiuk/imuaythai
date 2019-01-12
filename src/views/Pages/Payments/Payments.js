import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'js-md5';

class Payments extends Component {

    render() {

        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <h5>We are waiting for a payment confirmation. You will be able to use your license when it will be confirmed. </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payments;
