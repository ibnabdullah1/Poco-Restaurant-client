import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLatestReservations = (email) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: manageBookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageBookings", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-bookings/${email}`);
      return res.data;
    },
  });

  const latestReservations = manageBookings.slice(-4).reverse();
  const TotalReservations = manageBookings.length;
  return { TotalReservations, latestReservations, isLoading, refetch };
};

export default useLatestReservations;
