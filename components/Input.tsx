import React from "react";
import { Field, Form, Formik } from "formik";

export type FieldProps = {
    id: string
};

export const Input: React.FC<FieldProps> = ({id}) => {
    return (
        <div className={`mt-2 mx-6`}>
            <label htmlFor={id} className={``}>{id}</label>
            <Field id={id} name={id} className={`block outline-none bg-gscale-dark-background-secondary py-1.5 px-2 rounded w-full focus:bg-gscale-dark-background-ternary500`} />
        </div>
    );
};
