import React, { Component } from 'react';
import { host } from "../../../global"
import { saveRange, fetchRanges, deleteRange } from "../../../actions/Dictionaries/ContestRangesActions"
import RemoveButton from "../../Components/Buttons/RemoveButton"
import EditButton from "../../Components/Buttons/EditButton"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import Spinner from "../../Components/Spinners/Spinner"

connect((store) => {
    return {
        ranges: store.ContestRanges.ranges,
        fetching: store.ContestRanges.fetching,
        fetched: store.ContestRanges.fetched
    };
})
export default class ContestRangesPage extends Component {
    constructor(props) {
        super(props);
        this.fetchRanges();
    }

    fetchRanges() {
        this
            .props
            .dispatch(fetchRanges())
    }

    deleteRange(id) {
        this
            .props
            .dispatch(deleteRange(id))
    }

    removeRange(id) {
        var self = this;
        axios
            .post(host + 'api/dictionaries/ranges/remove', {
                Id: id
            })
            .then(function(response) {
                self.deleteRange(response.data)
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {

        const {ranges, fetching} = this.props;
        if (fetching) {
            return <Spinner />
        }
        const mappedRanges = ranges.map((range, i) => <tr key={ i }>
                                                        <td>
                                                          { range.id }
                                                        </td>
                                                        <td>
                                                          { range.name }
                                                        </td>
                                                        <td>
                                                          <Link to={ "/dictionaries/ranges/" + range.id }>
                                                          <EditButton id={ range.id } />
                                                          </Link>
                                                          <RemoveButton id={ range.id } click={ this.removeRange.bind(this, range.id) } />
                                                        </td>
                                                      </tr>);


        return (

            <div className="animated fadeIn">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <strong>Ranges</strong>
                      <div class="pull-right">
                        <Link to={ "/dictionaries/ranges/new" }><i class="fa fa-plus-square-o" aria-hidden="true"> Create</i></Link>
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
                          { mappedRanges }
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