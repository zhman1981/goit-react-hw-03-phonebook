import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyForm, SubmitButton, Input } from './SubmitForm.styled';

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
            <MyForm>
              <p>Name:</p>
              <Field type="name" name="name" as={Input} />
              <ErrorMessage name="name" component="div" />
              <p>Number:</p>
              <Field type="name" name="number" as={Input} />
              <ErrorMessage name="number" component="div" />
              <SubmitButton type="submit" disabled={isSubmitting}>
                Add contact
              </SubmitButton>
            </MyForm>
          )}
        </Formik>
      </div>
    );
  }
}

export default SubmitForm;
