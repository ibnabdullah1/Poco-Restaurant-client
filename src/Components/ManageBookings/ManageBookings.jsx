import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();
  const [noData, setNoData] = useState();
  const { user } = useAuth();
  const {
    refetch,
    data: manageBookings = [],
    isLoading,
  } = useQuery({
    queryKey: ["manageBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-bookings/${user?.email}`);
      return res.data;
    },
  });
  const handleChangeBookingStatus = async (id, status) => {
    try {
      const res = await axiosSecure.put(`/manage-bookings/${id}`, {
        status: status,
      });
      if (res.data.modifiedCount) {
        refetch();
        toast.success("Booking status updated successfully");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    if (manageBookings?.length <= 0) {
      setNoData("Empty Bookings!");
    } else {
      setNoData("");
    }
  }, [manageBookings]);

  return (
    <>
      <SectionTitle subHeading={"Bookings"} heading={"Manage Booking"} />

      <div className="p-10 overflow-x-auto rounded-md bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-xs text-left border-b-[1.5px] border-b-[#dddddd] text-gray-800 ">
              <th className="px-6 pb-3 font-semibold">Name</th>
              <th className="px-6 pb-3 font-semibold ">Date </th>
              <th className="px-6 pb-3 font-semibold ">Time </th>
              <th className="px-6 pb-3 font-semibold">Email </th>
              <th className="px-6 pb-3 font-semibold">Guest </th>
              <th className="px-6 pb-3 font-semibold">Status </th>
            </tr>
          </thead>
          <tbody>
            {manageBookings?.map((booking, i) => (
              <tr key={i} className="text-xs border-b rounded-md">
                <td className="px-6 py-5 font-medium">{booking?.user}</td>
                <td className="px-6 py-5 font-medium ">{booking?.date}</td>
                <td className="px-6 py-5 font-medium ">{booking?.time}</td>
                <td className="px-6 py-5 font-medium ">{booking?.email}</td>
                <td className="px-6 py-5 font-medium ">{booking?.guest}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={
                        booking.status === "Canceled" ||
                        booking.status === "Confirmed"
                      }
                      onClick={() =>
                        handleChangeBookingStatus(booking._id, "Confirmed")
                      }
                      className={`inline-block px-2 py-1 text-center rounded-full ${
                        (booking.status === "Canceled" &&
                          "text-gray-300 bg-gray-100") ||
                        (booking.status === "Confirmed" &&
                          " bg-green-500 text-white") ||
                        (booking.status === "Pending" &&
                          " text-green-500 bg-green-100")
                      }`}
                    >
                      {booking.status === "Confirmed"
                        ? booking.status
                        : "Confirm"}
                    </button>
                    <button
                      disabled={booking.status === "Confirmed"}
                      onClick={() =>
                        handleChangeBookingStatus(booking._id, "Canceled")
                      }
                      className={`inline-block px-2 py-1 text-center rounded-full ${
                        (booking.status === "Canceled" &&
                          "text-white bg-red-600") ||
                        (booking.status === "Confirmed" &&
                          " text-gray-300 bg-gray-100") ||
                        (booking.status === "Pending" &&
                          " text-red-600 bg-red-100")
                      }`}
                    >
                      {booking.status === "Canceled" ? "Canceled" : "Cancel"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading ? (
          <Spinner color="green" />
        ) : (
          <p className="text-gray-500">{noData}</p>
        )}
      </div>
    </>
  );
};

export default ManageBookings;
