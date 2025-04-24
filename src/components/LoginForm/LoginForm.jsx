
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
// import { MdEmail } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(({ user }) => {
        toast.success(`Welcome back, ${user.name}!`);
      })
      .catch(() => {
        toast.error('Invalid username or password. Please try again.');
      });
    actions.resetForm();
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').max(20, 'Too Long!').required('Required'),
  });

  return (
    <Formik validationSchema={loginSchema} initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
      <Form autoComplete='off' className={css.form}>
        <div>
          <label  htmlFor='email'>Email</label>
          <div className = {css.label}>
            {/* <MdEmail /> */}
            <Field type='email' name='email' />
          </div>
          <ErrorMessage name='email' component='span' />
        </div>
        <div >
          <label htmlFor='password'>Password</label>
          <div  className = {css.label}>
            <Field  type='password' name='password' />
          </div>
          <ErrorMessage  name='password' component='span' />
        </div>
        <button type='submit'>
          Login
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
}