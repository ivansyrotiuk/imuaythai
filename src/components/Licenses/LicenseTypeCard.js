import React from 'react';
import {  Link } from 'react-router-dom';

export const LicenseTypeCard = props => {
    const { type, handleBuyClick } = props;
    return (
        <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card">
                <div className="card-header">
                    <strong>{type.name}</strong>
                </div>
                <div className="card-block">
                    <div className="row mt-3">
                        <div className="col h6 text-center">{type.price} {type.currency}</div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="btn btn-primary" onClick={() => handleBuyClick(type.id, type.institutionId)}>Buy</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LicenseTypeCard;
