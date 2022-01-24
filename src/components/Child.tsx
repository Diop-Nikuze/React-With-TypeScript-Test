type ChildProps = {
  children: React.ReactNode;
};

const Child = ({ children }: ChildProps) => {
  return <div>{children}</div>;
};

export default Child;
