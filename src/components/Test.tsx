type TestProps = {
  name: string;
  role: string;
  skills: string;
};

const Test = (props: TestProps) => {
  return (
    <div>
      My name is {props.name}, I'm {props.role} ( {props.skills} )
    </div>
  );
};

export default Test;
