import clsx from "clsx"

interface CardLinkGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function CardLinkGrid({
    children,
    className,
    ...rest
}: CardLinkGridProps) {
    return (
        <div 
            className={clsx(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3",
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}