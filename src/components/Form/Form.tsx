import { FormThemeContext } from "./FormContext"

interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'action'> {
    action?: ((payload: FormData) => void) | string;
    children: React.ReactNode;
    primaryColor?: string;
    secondaryColor?: string;
}

export default function Form({
    action,
    children,
    primaryColor = 'blue-500',
    secondaryColor,
    ...rest
}: FormProps) {
    return (
        <FormThemeContext.Provider value={{ primaryColor, secondaryColor }}>
            <form action={typeof action === 'string' ? action : undefined} {...rest}>
                {children}
            </form>
        </FormThemeContext.Provider>
    )
}