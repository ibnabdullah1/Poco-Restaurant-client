import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user } = useAuth();
  const currentUserEmail = user.email;
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/role");
      return res.data;
    },
  });
  const getUserRole = () => {
    const foundUser = users.find((user) => user?.email === currentUserEmail);
    return foundUser ? foundUser.role : "";
  };

  return { userRole: getUserRole(), users };
};

export default useRole;
