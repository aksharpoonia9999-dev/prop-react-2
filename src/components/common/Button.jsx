import { Link } from "react-router-dom";

const Button = ({ children, to }) => {
  return (
    <Link to={to} className="max-w-97 w-full h-13 flex items-center justify-center text-white text-base font-normal leading-[100%] border border-solid border-white rounded-[114.9px] mt-7.5">
      {children}
    </Link>
  );
};

export default Button