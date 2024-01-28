import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/role");
      return res.data;
    },
  });

  const getUserRole = () => {
    const foundUser = users.find((user) => user?.email === user?.email);
    return foundUser ? foundUser.role : "";
  };

  return { userRole: getUserRole(), users };
};

export default useRole;
