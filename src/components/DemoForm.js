import { useFormik } from "formik"

function DemoForm() {
    const formik = useFormik({
        initialValues: {
            nameinput:'',
            emailinput:'',
            channelinput:''
        }
    })
    return(
        <form>
            <label>Name</label>
            <input type="text" name="nameinput" id="nameinput"
            onChange={formik.handleChange} value={formik.values.nameinput}/>

            <label>Email</label>
            <input type="email" name="emailinput" id="emailinput"
            onChange={formik.handleChange} value={formik.values.emailinput} />

            <label>Channel name</label>
            <input type="text" name="channelinput" id="channelinput"
            onChange={formik.handleChange} value={formik.values.channelinput}/>
        </form>
    )
}

export default DemoForm