import { createContext, useContext } from "react";

interface FormTheme {
    primaryColor?: string;
    secondaryColor?: string;
}

export const FormThemeContext = createContext<FormTheme | undefined>(undefined);

export function useFormTheme() {
    return useContext(FormThemeContext);
}