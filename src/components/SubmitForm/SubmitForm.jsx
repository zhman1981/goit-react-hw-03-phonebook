import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { css } from '@emotion/css';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/g;
const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegex, 'Only alphabets are allowed for this field ')
    .required('Required'),
  number: Yup.string()
    .matches(
      numberRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export class SubmitForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: this.state.name, number: this.state.number }}
          validationSchema={ContactSchema}
          onSubmit={(values, { setSubmitting }) => {
            this.props.onSend(values);
            document.querySelector('Form').reset();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form
              className={css`
                display: flex;
                flex-direction: column;
                padding: 15px;
                font-size: 16px;
                width: 25%;
                border: 1px solid;
              `}
            >
              <p>Name:</p>
              <Field type="name" name="name" />
              <ErrorMessage name="name" component="div" />
              <p>Number:</p>
              <Field type="name" name="number" />
              <ErrorMessage name="number" component="div" />
              <button
                type="submit"
                disabled={isSubmitting}
                className={css`
                  margin-top: 15px;
                `}
              >
                Add contact
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SubmitForm;
