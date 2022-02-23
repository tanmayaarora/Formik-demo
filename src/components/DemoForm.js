import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function DemoForm() {
    const initialValues = {
        nameinput:'',
        emailinput:'',
        channelinput:''
    };
    const FormSchema = Yup.object().shape({
        nameinput: Yup.string().required("Name is required"),
        emailinput: Yup.string().email().required("Email is Required"),
        channelinput: Yup.string().required("Channel name is required")
    });
    const onSubmit = values => {
        console.log("Formik values: ",values);
    }
    return (
        <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label>Name</label>
                    <Field type="text" name="nameinput" id="nameinput" />
                    <ErrorMessage name="nameinput"/>
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <Field type="email" name="emailinput" id="emailinput" />
                    <ErrorMessage name="emailinput"/>
                </div>

                <div className="form-control">
                    <label>Channel name</label>
                    <Field type="text" name="channelinput" id="channelinput" />
                    <ErrorMessage name="channelinput"/>
                    <button type="submit">SUBMIT</button>
                </div>
            </Form>
        </Formik>
    )
}

export default DemoForm