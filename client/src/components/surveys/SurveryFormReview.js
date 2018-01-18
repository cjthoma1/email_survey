//SurveyFormReview shows users their form inputs for review
import React from 'react';
import {connect} from 'react-redux';
import FIELDS from './formFields';

const SurveryFormReview = ({onCancel, formValues}) => {

  return (
    <div>
      <h5>Please Confirm your entries</h5>

      <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
    </div>
  )

}

function mapStateToProps(state) {
  return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps)(SurveryFormReview);

// <div>   <label>Survey Title</label>   <div>{formValues.title}</div> </div>