import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Spinner } from "@material-tailwind/react";

const MyBooking = () => {
  const axiosSecure = useAxiosSecure();
  const [noData, setNoData] = useState();
  const { user } = useAuth();
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reservation/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (bookings?.length <= 0) {
      setNoData("You have no Bookings!");
    } else {
      setNoData("");
    }
  }, [bookings]);

  return (
    <>
      <SectionTitle subHeading={"Bookings"} heading={"My Booking"} />

      <div className="p-10 overflow-x-auto rounded-md bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-xs text-left text-gray-800 ">
              <th className="px-6 pb-3 font-medium">Name</th>
              <th className="px-6 pb-3 font-medium ">Date </th>
              <th className="px-6 pb-3 font-medium">Email </th>
              <th className="px-6 pb-3 font-medium">Guest </th>
              <th className="px-6 pb-3 font-medium">Status </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={i} className="text-xs bg-gray-100 rounded-md">
                <td className="px-6 py-5 font-medium">{booking?.user}</td>
                <td className="px-6 py-5 font-medium ">{booking?.date}</td>
                <td className="px-6 py-5 font-medium ">{booking?.email}</td>
                <td className="px-6 py-5 font-medium ">{booking?.guest}</td>
                <td>
                  <span
                    className={`inline-block px-2 py-1 text-center 
                  ${
                    (booking?.status === "Pending" &&
                      "text-green-600 bg-green-100") ||
                    (booking?.status === "Accepted" &&
                      "text-red-600 bg-red-100") ||
                    (booking?.status === "Canceled" &&
                      "text-yellow-600 bg-yellow-100")
                  } rounded-full`}
                  >
                    {booking?.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col py-5 justify-center items-center">
          {isLoading ? (
            <Spinner color="green" />
          ) : (
            <p className="text-gray-500">{noData}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBooking;
