import clsx from "clsx";
import { useFormTheme } from "../Form/FormContext";

interface OutlineFieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    children?: React.ReactNode;
}

export default function OutlineFieldset({
    children, 
    className, 
    ...rest
}: OutlineFieldsetProps) {
    const theme = useFormTheme();

    const borderColor = theme?.primaryColor ? `border-${theme?.primaryColor}` : 'border-gray-500';

    return (
        <fieldset
            className={clsx(
                'rounded-xl border-solid border-2 max-w-md p-4 m-auto',
                borderColor,
                className
            )}
            {...rest}
        >
            {children}
        </fieldset>
    )
}