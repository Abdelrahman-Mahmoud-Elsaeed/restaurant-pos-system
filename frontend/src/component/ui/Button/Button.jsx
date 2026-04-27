function Button({
  fontSize = 4,
  fontWight = "normal",
  text = "Button",
  variant = "primary",
  styles,
}) {

  const fontSizeMap = {
    1: 2.5,
    2: 2,
    3: 1.75,
    4: 1.5,
    5: 1.25,
    6: 1,
    7: 0.5,
  };

  const fs = fontSizeMap[fontSize] || 1.5;

  const baseStyles = {
    fontSize: `${fs}rem`,
    fontWeight: fontWight,

    padding: `${0.6}em ${1.2}em`,

    minWidth: `${6}em`,

    lineHeight: 1.2,

    borderRadius: "0.4em",
    boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.05)",

    whiteSpace: "nowrap",
    color: "#fff",
    borderStyle: "solid",
    borderColor: "transparent",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "var(--primary-color)",
    },
    secondary: {
      backgroundColor: "var(--main-bg-color)",
      borderColor: "#CBD5E1",
      color: "var(--text-color-4)",
      borderWidth: "0.15em",
    },
  };

  return (
    <button
      type="button"
      style={{ ...baseStyles, ...variantStyles[variant], ...styles }}
    >
      {text}
    </button>
  );
}


export default Button