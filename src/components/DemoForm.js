import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

function DemoForm() {
    const initialValues = {
        nameinput:'',
        emailinput:'',
        channelinput:'',
        phoneNumbers: ['']
    };
    const FormSchema = Yup.object().shape({
        nameinput: Yup.string(),
        emailinput: Yup.string().email(),
        channelinput: Yup.string()
    });

    const validateName = value => {
        console.log(`Name value in validateName is ${value}`);
        let error;
        if(value===""){
            error = 'Name is required';
        }
        return error;
    }

    const validateEmail = value => {
        console.log(`Email value in validateEmail is ${value}`);
        let error;
        if(value===""){
            error = 'Email is required';
        }
        return error;
    }

    const validateChannel = value => {
        console.log(`Channel value in validateChannel is ${value}`);
        let error;
        if(value===""){
            error = 'Channel name is required';
        }
        return error;
    }
    // const onSubmit = values => {
    //     console.log("Formik values: ",values);
    // }
    return (
        <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={values => alert(JSON.stringify(values))} //Console.log not working so changed to alert
        >
            {
                formik => {
                    console.log("Formik props: ",formik);
                    return (
                        <Form>
                            <div className="form-control">
                                <label>Name</label>
                                <Field type="text" name="nameinput" id="nameinput" validate={validateName} />
                                <ErrorMessage name="nameinput" />
                            </div>

                            <div className="form-control">
                                <label>Email</label>
                                <Field type="email" name="emailinput" id="emailinput" validate={validateEmail} />
                                <ErrorMessage name="emailinput" />
                            </div>

                            <div className="form-control">
                                <label>Channel name</label>
                                <Field type="text" name="channelinput" id="channelinput" validate={validateChannel} />
                                <ErrorMessage name="channelinput" />
                            </div>
                            <div className="form-control">
                                <label>Phone number</label>
                                <FieldArray name="phoneNumbers">
                                    {
                                        (fieldArrayProps) => {
                                            console.log("Field array props: ", fieldArrayProps);
                                            const { push, remove, form } = fieldArrayProps;
                                            const { values } = form;
                                            const { phoneNumbers } = values;
                                            console.log("Values in form ", values);
                                            return (
                                                <div>
                                                    {phoneNumbers.map((nos, index) => (
                                                        <span key={index}>
                                                            <Field name={`phoneNumbers[${index}]`} />
                                                            <button onClick={() => remove(index)} className="inner">-</button>
                                                            <button onClick={() => push('')} className="inner">+</button>
                                                        </span>
                                                    ))
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                                <ErrorMessage name="phoneNumbers" />
                                <button type="submit" className="dBlock" disabled={!(formik.dirty && formik.isValid)}>
                                    SUBMIT
                                </button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default DemoForm