
import { useDispatch } from 'react-redux';
import {ErrorMessage, Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
    .unwrap()
    .then(({ user }) => {
      toast.success(`Welcome, ${user.name}!`);
    })
    .catch(() => {
      toast.error('Error, this user may already exist.');
    });
    actions.resetForm();
  };

 const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').max(20, 'Too Long!').required('Required'),
  });

  return (
    <Formik
    validationSchema={ValidationSchema}
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name='name' component='span' />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
            <ErrorMessage name='name' component='span' />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name='name' component='span' />
        </label>
        <button type="submit">Register</button>
        <Toaster />
      </Form>
    </Formik>
  );
}