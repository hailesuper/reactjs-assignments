import {Fragment} from "react";
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

const InputField = ({name, control}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                         field,
                         fieldState: { invalid, isTouched, isDirty, error },
                         formState,
                     }) => (
                <TextField id={name} label={name.toUpperCase()} variant="outlined" {...field}/>
            )}
        />

    )
}

export default InputField;