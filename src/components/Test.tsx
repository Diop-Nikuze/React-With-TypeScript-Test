type TestProps = {
  status: "loading" | "success" | "error";
};

const Test = ({ status }: TestProps) => {
  let message;

  if (status === "loading") {
    message = "loading...";
  } else if (status === "success") {
    message = "Fetched successufully !";
  } else if (status === "error") {
    message = "Error, check your connection";
  }

  return <div>{message}</div>;
};

export default Test;
