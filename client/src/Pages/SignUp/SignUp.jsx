import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../Redux/actions/actions'

const SignUp = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex w-5/6 md:w-2/3 lg:w-1/2 mx-auto h-auto md:h-screen '>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if(!values.name){
            errors.name = "Name is required"
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(!values.password){
            errors.password = "Password is required"
          } else if(values.password.length < 4){
            errors.password = "Password must be more than 4 characters"
          } else if(values.password.length > 8){
            errors.password = "Password must be less 8 characters"
          }
          if(values.password !== values.passwd){
            errors.passwd = "Password doesn't match"
          }
          return errors;
        }}
        onSubmit={ async (values, { setSubmitting }) => {          
          const response = await dispatch(createUser(values))
          console.log("response form", response.status);
          setSubmitting(false);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 my-8 md:my-auto">
            <Form className='space-y-6'>
              <h5 className="text-2xl font-semibold text-gray-900 text-center">Sign up</h5>
              <div>
                <label htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email address
                </label>
                <Field type="text" name="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                <ErrorMessage name="name" className='text-sm font-semibold text-red-600' component="div"  />
              </div>
              <div>
                <label htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email address
                </label>
                <Field type="email" name="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                <ErrorMessage name="email" className='text-sm font-semibold text-red-600' component="div"  />
              </div>
              <div>
                <label htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <Field type="password" name="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                <ErrorMessage name="password" className='text-sm font-semibold text-red-600' component="div" />
              </div>
              <div>
                <label htmlFor="passwd"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Repeat password
                </label>
                <Field type="password" name="passwd"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                <ErrorMessage name="passwd" className='text-sm font-semibold text-red-600' component="div" />
              </div>

              <div className='flex justify-around'>
                <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center mr-2 mb-2' type="submit" disabled={isSubmitting}>
                  Signup
                </button>
                <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-12 py-2.5 text-center mr-2 mb-2' type="reset">
                  Reset
                </button>

              </div>
              <div className='flex flex-col items-center'>
                <h4>Do you have any account already?</h4>
                <Link to={"/login"} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> Login page here!!</Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default SignUp