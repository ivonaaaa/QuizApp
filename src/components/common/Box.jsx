import "/src/styles/App.css";

const Box = ({ children, className }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
