import { Link } from "react-router-dom";

const Button = ({ level, address }) => {
  return (
    <Link to={address}>
      <button className="inline-block px-5 py-3 text-sm font-medium text-black bg-[#FFCC00] border border-[#FFCC00] transform duration-500 rounded active:text-[#FFCC00] hover:bg-transparent hover:text-[#FFCC00] focus:outline-none focus:ring">
        {level}
      </button>
    </Link>
  );
};

export default Button;
