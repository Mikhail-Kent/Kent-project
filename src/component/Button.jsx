function Button({
    children,
    variant = "primary",
    href,
    className = "",
    disabled = false
}) {
    const buttonClass = `btn btn-${variant} ${className}`;

    // Если передан адрес, показываем ссылку с внешним видом кнопки.
    if (href) {
        return (
            <a href={href} className={buttonClass}>
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={buttonClass}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;

