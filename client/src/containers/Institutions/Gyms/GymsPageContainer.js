import React, { Component } from 'react';
import ActionButtonGroup from "../../../views/Components/Buttons/ActionButtonGroup"
import AddButton from "../../../views/Components/Buttons/AddButton"
import Spinner from "../../../views/Components/Spinners/Spinner"
import TablePage from "../../../views/Components/TablePage"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { fetchGyms, deleteInstitution } from "../../../actions/InstitutionsActions"
import DeleteConfirmationModal from "../../../views/Components/DeleteConfirmationModal"
import DeleteConfirm from 'react-delete-confirm'


class GymsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.addGym = this.addGym.bind(this);

  }


  componentWillMount() {
    this.props.fetchGyms();
  }

  addGym() {
    this.props.history.push('/institutions/gyms/add');
  }



  render() {
    const {gyms, fetching} = this.props;


    if (fetching) {
      return <Spinner />
    }

    var danger = true;

    const pageHeader = <div><strong>Gyms</strong>
                         <div className="pull-right">
                           <AddButton click={ this.addGym } tip="Add gym" />
                         </div>
                       </div>;

    const tableHeaders = <tr>
                           <th className="col-1">Id</th>
                           <th className="col-5">Name</th>
                           <th className="col-3">Country</th>
                           <th className="col-2 text-center">Action</th>
                         </tr>

    const mappedGyms = gyms.map((gym, i) => <tr key={ i }>
                                              <td className="align-middle">
                                                <Link to={ "/institutions/gyms/" + gym.id }>
                                                { gym.id }
                                                </Link>
                                              </td>
                                              <td className="align-middle">
                                                { gym.name }
                                              </td>
                                              <td>
                                                { gym.country.name }
                                              </td>
                                              <td className="align-middle">
                                                <ActionButtonGroup previewClick={ () => this.props.history.push("/institutions/gyms/" + gym.id) } editClick={ () => this.props.history.push("/institutions/gyms/edit/" + gym.id) } deleteClick={ this.props.deleteGym.bind(this, gym.id) } />
                                              </td>
                                            </tr>);





    return <TablePage pageHeader={ pageHeader } headers={ tableHeaders } content={ mappedGyms } />;
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    gyms: state.Institutions.gyms,
    fetching: state.Institutions.fetching,
    fetched: state.Institutions.fetched,
    danger: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGyms: () => {
      dispatch(fetchGyms())
    },
    deleteGym: (id) => {
      return dispatch(deleteInstitution(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GymsPageContainer)