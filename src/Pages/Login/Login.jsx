import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();
  console.log(location);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email?.value;
    const password = form.password.value;
    signIn(email, password).then(() => {
      toast.success("User Login  successfully");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0,0.06)",
        }}
        className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white  text-gray-900"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl text-gray-800 font-bold">Log In</h1>
          <p className="text-xl font-semibold text-gray-600">
            Welcome to <span className="text-[#ffcc00]">Poco Restaurant</span>
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00B207] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00B207] bg-white text-gray-900"
                />
                <span
                  className="absolute top-[14px] right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>

              {passwordError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#00B207] w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(0,178,7,0.8)] py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-[#D1A054] text-gray-400">
            Forgot password?
          </button>
        </div>
        <SocialLogin />
        <p className="px-6 mt-3 text-sm text-center text-gray-400">
          Don’t have account?
          <Link
            to="/signup"
            className="hover:underline font-semibold hover:text-[#00B207] text-[#00B207]"
          >
            Sing Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
