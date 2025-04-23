// ==============REPETA GUY IS DIFFERENT++++++++++++++
// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';
// import { logIn } from '../../redux/auth/operations';
// import css from './LoginForm.module.css';

// export default function LoginForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(logIn(values))
//       .unwrap()
//       .then(() => console.log('Login success'));

//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//       }}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.form} autoComplete="off">
//         <label className={css.label}>
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label className={css.label}>
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <button type="submit">Log In</button>
//       </Form>
//     </Formik>
//   );
// }


// ==============guy====================
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';



// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';
// import { logIn } from '../../redux/auth/operations';
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
        <div className={css.inputWrapper}>
          <label htmlFor='email'>Email</label>
          <div className={css.inputIcon}>
            <MdEmail className={css.icon} />
            <Field className={css.field} type='email' name='email' />
          </div>
          <ErrorMessage className={css.err} name='email' component='span' />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor='password'>Password</label>
          <div className={css.inputIcon}>
            <RiLockPasswordFill className={css.icon} />
            <Field className={css.field} type='password' name='password' />
          </div>
          <ErrorMessage className={css.err} name='password' component='span' />
        </div>
        <button type='submit' className={css.btn}>
          Login
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
}