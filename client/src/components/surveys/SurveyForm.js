//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {reduxForm, Field} from "redux-form";
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails.js';
import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields() {

    return _.map(FIELDS, ({label, name}) => {
      return (<Field
        key={name}
        type="text"
        name={name}
        label={label}
        component={SurveyField}/>);
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this
          .props
          .handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Next
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  _.each(FIELDS, ({name, label}) => {

    errors.emails = validateEmails(values.emails || '');

    if (!values[name]) {
      errors[name] = `You must provide a ${label}`;
    }

  });

  return errors;
}

export default reduxForm({validate: validate, destroyOnUnmount:false, form: "surveyForm"})(SurveyForm);
//<i className="material-icons right">done</i>