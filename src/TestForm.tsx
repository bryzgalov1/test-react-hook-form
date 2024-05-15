import React from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";

export type TValues = {
    [key: string]: string;
};

type TProps = {
    values: TValues;
};

const TestForm = (props: TProps) => {
    const {
        values,
    } = props;

    const {
        register,
        handleSubmit,
        // formState,
        // control,
        // getValues,
        watch,
        // ...props
    } = useForm<TValues>({
        defaultValues: {
            ...values,
        },
    });

    const watchAllFields = watch();

    return (
        <div className="TestForm" >
            <div>
                <form
                    onSubmit={handleSubmit((data) => {
                        console.log('handleSubmit', data);
                    })}
                >
                    {Object.entries(values).map((item) => {
                        const [fieldName] = item;
                        return (
                            <input
                                key={fieldName}
                                {...register(fieldName)}
                            />
                        );
                    })}
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
            <div>
                {JSON.stringify(watchAllFields)}
            </div>
            {/* <DevTool control={control} /> */}
        </div>
    );
}

export default TestForm;
