type StylesProps = {
  styles: React.CSSProperties;
};

const Styles = ({ styles }: StylesProps) => {
  return <div style={styles}>Style elements with TypeScript</div>;
};

export default Styles;
