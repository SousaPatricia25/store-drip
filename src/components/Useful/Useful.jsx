
export const Useful = ({ margin, color, href, textDecoration, value }) => {
  return (
    <a 
      style={{
        margin: margin,
        color: color, 
        textDecoration: textDecoration
      }}
      href={href} 
      target="_blank"
    >{value}</a>
  );
}