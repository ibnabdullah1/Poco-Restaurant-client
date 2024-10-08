import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  const handleLoginWithGoogle = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result?.user;
      const saveUser = {
        name: loggedInUser?.displayName,
        email: loggedInUser?.email,
        userProfile: loggedInUser?.photoURL,
        role: "user",
      };
      axiosPublic.post("/users", saveUser).then((res) => {
        if (!res.data.insertedId) {
          toast.error("user already exists");
          navigate(from, { replace: true });
        }
        if (res.data.insertedId) {
          toast.success("User created successfully");
          navigate(from, { replace: true });
        }
      });
    });
  };

  return (
    <div className="pb-5 ">
      <div className="flex justify-center items-center my-3">
        <button
          onClick={handleLoginWithGoogle}
          className="flex  w-full justify-center items-center gap-2 border p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
