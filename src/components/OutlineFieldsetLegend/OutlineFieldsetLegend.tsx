import clsx from "clsx"
import { useFormTheme } from "../Form/FormContext"

interface OutlineFieldsetLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
    children?: React.ReactNode;
}

export default function OutlineFieldsetLegend({
    children,
    className,
    ...rest
}: OutlineFieldsetLegendProps) {
    const theme = useFormTheme();

    const textColor = theme?.primaryColor ? `text-${theme?.primaryColor}` : 'text-gray-500';

    return (
        <legend
            className={clsx(
                'px-2 text-lg',
                textColor,
                className
            )}
            {...rest}
        >
            {children}
        </legend>
    )
}