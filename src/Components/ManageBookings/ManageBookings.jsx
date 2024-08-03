import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";

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
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="text-xs border-b rounded-md">
                    <td className="px-6 py-5 font-medium">
                      <Skeleton width={100} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={80} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={60} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={120} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={50} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <div className="flex items-center gap-2">
                        <Skeleton width={60} height={24} />
                        <Skeleton width={60} height={24} />
                      </div>
                    </td>
                  </tr>
                ))
              : manageBookings?.map((booking, i) => (
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
                          {booking.status === "Canceled"
                            ? "Canceled"
                            : "Cancel"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {noData && (
          <div className="text-center text-gray-500 py-5">{noData}</div>
        )}
      </div>
    </>
  );
};

export default ManageBookings;
