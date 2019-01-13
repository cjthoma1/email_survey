//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyFormReview from './SurveryFormReview';
import SurveyForm from './SurveyForm';


class SurveyNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    return this.state.showFormReview
      ? <SurveyFormReview onCancel={() => this.setState({showFormReview: false})}/>
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
