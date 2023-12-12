// validationSchema.js
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First Name is required'),
  
  email: yup.string().email('Invalid email address').required('Email is required'),
  place:yup.string().min(2,"Invalid Address").required("Required"),
  phone: yup.string()
  .matches(/^[6-9]\d{9}$/, "Please enter valid phone number.")
});

export default validationSchema;
