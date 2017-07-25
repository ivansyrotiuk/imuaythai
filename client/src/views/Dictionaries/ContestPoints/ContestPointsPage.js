import React, { Component } from 'react';
import { host } from "../../../global"
import { savePoint, fetchPoints, deletePoint } from "../../../actions/Dictionaries/ContestPointsActions"
import RemoveButton from "../../Components/Buttons/RemoveButton"
import EditButton from "../../Components/Buttons/EditButton"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import Spinner from "../../Components/Spinners/Spinner"

connect((store) => {
    return {
        points: store.ContestPoints.points,
        fetching: store.ContestPoints.fetching,
        fetched: store.ContestPoints.fetched
    };
})
export default class ContestPointsPage extends Component {
    constructor(props) {
        super(props);
        this.fetchPoints();
    }

    fetchPoints() {
        this
            .props
            .dispatch(fetchPoints())
    }

    deletePoint(id) {
        this
            .props
            .dispatch(deletePoint(id))
    }

    removePoint(id) {
        var self = this;
        axios
            .post(host + 'api/dictionaries/points/remove', {
                Id: id
            })
            .then(function(response) {
                self.deletePoint(response.data)
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {

        const {points, fetching} = this.props;
        if (fetching) {
            return <Spinner />
        }
        const mappedPoints = points.map((point, i) => <tr key={ i }>
                                                        <td>
                                                          { point.id }
                                                        </td>
                                                        <td>
                                                          { point.name }
                                                        </td>
                                                        <td>
                                                          <Link to={ "/dictionaries/points/" + point.id }>
                                                          <EditButton id={ point.id } />
                                                          </Link>
                                                          <RemoveButton id={ point.id } click={ this.removePoint.bind(this, point.id) } />
                                                        </td>
                                                      </tr>);


        return (

            <div className="animated fadeIn">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Points</strong>
                      <div class="pull-right">
                        <Link to={ "/dictionaries/points/new" }><i class="fa fa-plus-square-o" aria-hidden="true"> Create</i></Link>
                      </div>
                    </div>
                    <div className="card-block">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th className="col-md-9">Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          { mappedPoints }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
    }
}