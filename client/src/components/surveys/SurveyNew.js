//SurveyNew shows SurveyForm and SurveyFormReview

import React, {Component} from "react";
import {reduxForm} from 'redux-form';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from './SurveryFormReview';
import SurveryFormReview from "./SurveryFormReview";

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    return this.state.showFormReview
      ? <SurveryFormReview onCancel={() => this.setState({showFormReview: false})}/>
      : <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>;
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);