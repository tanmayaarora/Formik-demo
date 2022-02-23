import { useFormik } from "formik";
import * as Yup from "yup";

function DemoForm() {
    const FormSchema = Yup.object().shape({
        nameinput: Yup.string().required("Name is required"),
        emailinput: Yup.string().email().required("Email is Required"),
        channelinput: Yup.string().required("Channel name is required")
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nameinput:'',
            emailinput:'',
            channelinput:''
        },
        validationSchema: FormSchema,
        onSubmit: values => {
            console.log("Formik values: ",values);
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name="nameinput" id="nameinput"
                        {...formik.getFieldProps('nameinput')} />
                    {formik.errors.nameinput && formik.touched.nameinput ? (
                        <div>{formik.errors.nameinput}</div>
                    ) : null}
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name="emailinput" id="emailinput"
                        {...formik.getFieldProps('emailinput')} />
                    {formik.errors.emailinput && formik.touched.emailinput ? (
                        <div>{formik.errors.emailinput}</div>
                    ) : null}
                </div>

                <div className="form-control">
                    <label>Channel name</label>
                    <input type="text" name="channelinput" id="channelinput"
                        {...formik.getFieldProps('channelinput')} />
                    {formik.errors.channelinput && formik.touched.channelinput ? (
                        <div>{formik.errors.channelinput}</div>
                    ) : null}
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default DemoForm