import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import css from '../register/Register.module.css';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmitRegister = async (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <h3 className={css.title}>Registration Form</h3>
      <div style={{ width: '450px', margin: '0 auto' }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmitRegister}>
          {({ values }) => (
            <Form className={css.form}>
              <label htmlFor="name" className={css.label}>
                Name
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={css.input}
                  required
                  value={values.name || ''}
                  id="name"
                />
              </label>
              <label htmlFor="name" className={css.label}>
                Email
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className={css.input}
                  required
                  value={values.email || ''}
                  id="email"
                />
              </label>
              <label htmlFor="password" className={css.label}>
                Password
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter your phone password"
                  className={css.input}
                  required
                  value={values.password || ''}
                  id="password"
                />
              </label>
              <button type="sumbit" className={css.btn}>
                Registration
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Register;
