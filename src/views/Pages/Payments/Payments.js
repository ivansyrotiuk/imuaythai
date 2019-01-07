import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'js-md5';

class Payments extends Component {
    pay() {
        axios
            .post('https://sandbox.przelewy24.pl/trnDirect', {
                p24_session_id: '0123456789',
                p24_merchant_id: '79978',
                p24_pos_id: '79978',
                p24_amount: '500',
                p24_currency: 'PLN',
                p24_description: 'Test transaction',
                p24_client: 'Jaroslaw Kaczor',
                p24_address: 'Warszawa 15/25',
                p24_zip: '32-025',
                p24_city: 'Krakow',
                p24_country: 'PL',
                p24_email: 'was@was.re',
                p24_language: 'PL',
                p24_url_return: 'http://imuaythai.heroku.com',
                p24_sign: 'e2c43dec9578633c518e1f514d3b434b'
            })
            .then(console.log)
            .catch(console.log);
    }

    render() {
        const sessionId = new Date().getTime();
        const signInput = `${sessionId}|79978|25000|PLN|b5c0e98687b0f43d`;
        const sign = md5(signInput);
        console.log(signInput);
        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <button className="btn btn-info" type="button" onClick={this.pay}>
                                Pay
                            </button>

                            <form action="https://sandbox.przelewy24.pl/trnDirect" method="post">
                                <input type="text" name="p24_session_id" value={sessionId} />
                                <input type="text" name="p24_merchant_id" value="79978" />
                                <input type="text" name="p24_pos_id" value="79978" />
                                <input type="text" name="p24_amount" value="25000" />
                                <input type="text" name="p24_currency" value="PLN" />
                                <input type="text" name="p24_description" value="fdgfd" />
                                <input type="text" name="p24_client" value="Jan Kowalski" />
                                <input type="text" name="p24_address" value="ul. Polska 33/33" />
                                <input type="text" name="p24_zip" value="66-777" />
                                <input type="text" name="p24_city" value="Poznań" />
                                <input type="text" name="p24_country" value="PL" />
                                <input type="text" name="p24_email" value="email@host.pl" />
                                <input type="text" name="p24_language" value="pl" />
                                <input
                                    type="text"
                                    name="p24_url_return"
                                    value="https://imuaythai.herokuapp.com/#/dashboard"
                                />
                                <input
                                    type="text"
                                    name="p24_url_status"
                                    value="https://imuaythai-api.herokuapp.com/api/version/pay"
                                />

                                <input type="text" name="p24_api_version" value="3.2" />
                                <input type="text" name="p24_sign" value={sign} />
                                <input name="submit_send" value="wyślij" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payments;
