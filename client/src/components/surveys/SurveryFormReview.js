//SurveyFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveryFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <div>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please Confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons white-text right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
// withRouter provided in order to pass props.history to SurveyFormReviw
// SurviewFormReview then passes props.history on to the submitSurvey action method
export default connect(mapStateToProps, actions)(withRouter(SurveryFormReview));

