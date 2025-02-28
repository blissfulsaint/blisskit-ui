import clsx from "clsx"
import { useFormTheme } from "../Form/FormContext"

export default function OutlineInput({
    className,
    ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
    const theme = useFormTheme();

    const borderColor = theme?.primaryColor ? `border-${theme?.primaryColor}` : 'border-gray-500';

    return (
        <input 
            {...rest}
            className={clsx(
                'block border rounded-md px-2 py-1 w-full bg-transparent',
                borderColor,
                className
            )}
        />
    )
}