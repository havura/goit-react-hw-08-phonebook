import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import css from '../register/Register.module.css';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmitLogin = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
     <h3 className={css.title}>Login Form</h3>
    <div style={{ width: '450px', margin: '0 auto' }}>
      <Formik initialValues={initialValues} onSubmit={handleSubmitLogin}> 
      {({values}) => (
        <Form className={css.form}>
          <label htmlFor="email" className={css.label}>
            Email
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className={css.input}
              required
              value={values.email || ''}
            />
          </label>
          
          <label htmlFor="password" className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your phone password"
              className={css.input}
              required
              value={values.password || ''}
            />
          </label>
          <button type="sumbit" className={css.btn}>
            Login
          </button>
        </Form>
        )}
      </Formik>
    </div>
    </>
  );
};
export default Login;
