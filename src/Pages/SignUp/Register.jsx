import { Link, useLocation, useNavigate } from "react-router-dom";
import {} from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../Api/utilis";
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = form.image.files[0];

    setPasswordError("");

    const passwordValidation = validatePassword(password);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      setLoading(false);
      return;
    }

    try {
      const imageData = await imageUpload(image);

      createUser(email, password)
        .then(() => {
          updateUserProfile(name, imageData?.data?.display_url).then(() => {
            const userInfo = {
              name,
              email,
              role: "user",
              userProfile: imageData?.data?.display_url,
            };

            setLoading(false);
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                form.reset();
                setLoading(false);
                toast.success("User created successfully");
                navigate(from, { replace: true });
              }
            });
          });
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
        });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one capital letter.";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character.";
    }

    return setPasswordError("");
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
          <h1 className="my-3 text-2xl text-gray-800 font-bold">Sign In</h1>
          <p className="text-xl font-semibold text-gray-600">
            Welcome to <span className="text-[#00B207]">Poco Restaurant</span>
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00B207] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
            </div>{" "}
            <div>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
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
            to="/login"
            className="hover:underline font-semibold hover:text-[#00B207] text-[#00B207]"
          >
            Sing In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
