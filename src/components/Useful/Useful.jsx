
export const Useful = ({ margin, color, href, textDecoration, value }) => {
  return (
    <p>
      <a 
        style={{
        margin: margin,
        color: color, 
        textDecoration: textDecoration
        }}
        href={href} 
        target="_blank"
      >{value}</a>
    </p>
  );
}