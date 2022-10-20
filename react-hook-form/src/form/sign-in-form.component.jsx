import {useForm} from "react-hook-form";
import InputField from "./input-field.component";

const SignInForm = () => {
    const {handleSubmit, reset, control} = useForm({
        defaultValues: {
            userName: "",
            password: ""
        }
    });
    const onSubmit = data => {
        console.log(data);
        reset({
            userName: "",
            password: ""
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField name={"userName"} control={control}/>
            <InputField name={"password"} control={control}/>
            <input type={"submit"}/>
        </form>
    )
}

export default SignInForm;