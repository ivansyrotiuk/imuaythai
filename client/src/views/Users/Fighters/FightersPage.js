import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import UserAvatar from 'react-user-avatar'
import RemoveButton from "../../Components/Buttons/RemoveButton"
import EditButton from "../../Components/Buttons/EditButton"
import PreviewButton from "../../Components/Buttons/PreviewButton"
import Spinner from "../../Components/Spinners/Spinner"
import TablePage from "../../Components/TablePage"
import { fetchFighters, deleteUser } from "../../../actions/UsersActions"

class FightersPage extends Component {
  componentWillMount() {
    this.props.fetchFighters();
  }

  render() {
    const {fighters, fetching} = this.props;

    if (fetching) {
      return <Spinner />
    }

    const mappedFighters = fighters.map((fighter, i) => <tr key={ i }>
                                                          <td className="col-md-1">
                                                            <UserAvatar size="40" name={ fighter.firstname + ' ' + fighter.surname } />
                                                          </td>
                                                          <td className="col-md-7">
                                                            { fighter.firstname + ' ' + fighter.surname }
                                                          </td>
                                                          <td className="col-md-2">
                                                            { fighter.countryName }
                                                          </td>
                                                          <td className="col-md-2">
                                                            <Link to={ "/users/" + fighter.id }>
                                                            <PreviewButton id={ fighter.id } />
                                                            </Link>
                                                            <Link to={ "/users/" + fighter.id + "/edit" }>
                                                            <EditButton id={ fighter.id } />
                                                            </Link>
                                                            <RemoveButton id={ fighter.id } click={ this.props.deleteFighter.bind(this, fighter.id) } />
                                                          </td>
                                                        </tr>);

    const headers = <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>

    return <TablePage caption="Fighters" headers={ headers } content={ mappedFighters } />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fighters: state.Users.fighters,
    fetching: state.Users.fetching,
    fetched: state.Users.fetched
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFighters: () => {
      dispatch(fetchFighters());
    },
    deleteFighter: (id) => {
      dispatch(deleteUser(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FightersPage);