import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContestInstitutionRequests from '../../views/Contest/ContestInstitutionRequests'
import ContestRequestForm from '../../views/Contest/ContestRequestForm'
import AddButton from '../../views/Components/Buttons/AddButton'
import { Route, Link } from 'react-router-dom';
import Spinner from '../../views/Components/Spinners/Spinner'
import * as contestActions from '../../actions/ContestActions'
import { fetchContestRoles } from '../../actions/RolesActions'
import { dismissError } from '../../actions/ErrorsActions'
import { SubmissionError } from 'redux-form'
import { CONTEST_FIGHTER } from '../../common/contestRoleTypes'

class RequestAddingContainer extends Component {
  constructor(props) {
    super(props);
    this.addRequest = this.addRequest.bind(this);
  }


  componentWillMount() {
    var id = this.props.match.params.id;

    this.props.fetchContest(id);
    this.props.fetchContestRequests(id);
    this.props.fetchContestCandidates();
    this.props.fetchContestRoles();
  }


  addRequest() {
    const request = {
      contestId: this.props.contest.id
    }
    this.props.addContestRequest(request);
  }

  render() {
    const {contest, requests, roles, showRequestForm, candidates, singleRequest, saveContestRequest, cancelContestRequest, removeContestRequest} = this.props;


    return <div className="animated fadeIn">
             <div className="row">
               <div className="col-12">
                 <div className="card">
                   <div className="card-header">
                     <strong>Requests</strong>
                     { !showRequestForm && <div className="pull-right">
                                             <AddButton click={ this.addRequest } />
                                           </div> }
                   </div>
                   <div className="card-block">
                     { !showRequestForm && <ContestInstitutionRequests requests={ requests } removeContestRequest={ removeContestRequest } /> }
                     { !showRequestForm && <div className="btn btn-primary pull-right" onClick={ this.addRequest }><i className="fa fa-plus fa-1x" aria-hidden="true"> </i> Add</div> }
                     { showRequestForm && <ContestRequestForm onSubmit={ saveContestRequest } initialValues={ singleRequest } roles={ roles } candidates={ candidates } categories={ contest.contestCategories }
                                            onCancel={ cancelContestRequest } /> }
                   </div>
                 </div>
               </div>
             </div>
           </div>
  }

  componentWillUnmount() {
    this.props.dismissError();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contest: state.Contest.singleContest,
    fetching: state.Contest.fetching,
    roles: state.Roles.contestRoles,
    candidates: state.Contest.candidates,
    requests: state.Contest.institutionRequests,
    showRequestForm: state.Contest.showRequestForm,
    singleRequest: state.Contest.singleRequest,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContest: (id) => {
      dispatch(contestActions.fetchContest(id))
    },
    fetchContestRoles: () => {
      dispatch(fetchContestRoles())
    },
    fetchContestRequests: (contestId) => {
      dispatch(contestActions.fetchInstitutionContestRequests(contestId))
    },
    fetchContestCandidates: () => {
      dispatch(contestActions.fetchContestCandidates())
    },
    addContestRequest: (request) => {
      dispatch(contestActions.addContestRequest(request))
    },
    cancelContestRequest: () => {
      dispatch(contestActions.cancelContestRequest())
    },
    saveContestRequest: (request) => {
      if (!request.type) {
        throw new SubmissionError({
          _error: 'Please, select your role type'
        })
      }
      if (!request.userId) {
        throw new SubmissionError({
          _error: 'Please, select a user'
        })
      }
      if (request.type == CONTEST_FIGHTER && !request.contestCategoryId) {
        throw new SubmissionError({
          _error: 'Please, select a category'
        })
      }
      return dispatch(contestActions.saveContestRequest(request))
    },
    removeContestRequest: (request) => {
      dispatch(contestActions.removeContestRequest(request))
    },
    dismissError: () => {
      dispatch(dismissError())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestAddingContainer)