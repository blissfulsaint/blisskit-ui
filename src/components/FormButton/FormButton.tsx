import clsx from "clsx"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import { useFormTheme } from "../Form/FormContext"

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    disabled?: boolean;
}

export default function FormButton({
    children,
    disabled,
    className,
    ...rest
}: FormButtonProps) {
    const theme = useFormTheme();

    const bgColor = theme?.primaryColor ? `bg-${theme?.primaryColor}` : 'bg-gray-500';
    const hoverTextColor = theme?.primaryColor ? `hover:text-${theme?.primaryColor}` : 'hover:text-gray-500';

    return (
        <button
            {...rest}
            className={clsx(
                'px-2 py-1 w-full text-white rounded-md hover:bg-slate-200 transition duration 150',
                bgColor,
                hoverTextColor,
                disabled && 'bg-slate-400 hover:bg-slate-400',
                className
            )}
            disabled={disabled}
        >
            {disabled ? <LoadingSpinner /> : children}
        </button>
    )
}