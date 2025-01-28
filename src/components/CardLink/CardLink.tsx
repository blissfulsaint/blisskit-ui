import Link from "next/link";
import clsx from "clsx";

interface CardLinkProps {
    colspan?: string;
    textClassName?: string;
    className?: string;
    imgSrc?: string;
    href?: string;
    ariaLabel?: string;
    title: string;
}

export default function CardLink({
    colspan = 'col-span-1',
    textClassName,
    className,
    imgSrc,
    href = '#',
    ariaLabel,
    title,
}: CardLinkProps) {
    return (
        <div className={`${colspan}`}>
            <Link href={href} aria-label={ariaLabel}>
                <div
                    className={clsx(
                        'w-full h-64 bg-slate-400 rounded-xl overflow-hidden cursor-pointer relative',
                        className,
                    )}
                >
                    <div
                        className="absolute inset-0 transition-transform transform scale-100 hover:scale-110"
                        style={{
                            backgroundImage: `url('${imgSrc}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <p className={clsx(
                        "absolute bottom-0 left-0 w-full text-center p-2 py-3 text-xl bg-blue-400 text-white",
                        textClassName
                    )}>{title}</p>
                </div>
            </Link>
        </div>
    )
}