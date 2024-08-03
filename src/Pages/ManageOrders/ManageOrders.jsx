import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageOrders = () => {
  const [noData, setNoData] = useState();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: orders = [],
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders");
      return res.data;
    },
  });

  useEffect(() => {
    if (orders?.length <= 0) {
      setNoData("You have no orders!");
    } else {
      setNoData("");
    }
  }, [orders]);

  const handleChangeStatus = async (id) => {
    try {
      await axiosSecure.put(`/orders/${id}`);
      refetch();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Replace with actual date processing logic if needed
  const dateString = "2023-11-21T05:30:08.128Z";
  const dateObject = dateString.split("T")[0];

  return (
    <>
      <SectionTitle subHeading={"Orders"} heading={"Manage Orders"} />

      <div className="p-4 overflow-x-auto bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
              <th className="px-6 pb-3 font-medium">Transaction ID</th>
              <th className="px-6 pb-3 font-medium">Date</th>
              <th className="px-6 pb-3 font-medium">Email</th>
              <th className="px-6 pb-3 font-medium">Pay</th>
              <th className="px-6 pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <tr
                    key={i}
                    className="text-xs border-b bg-[rgba(255,255,255,0.2)]"
                  >
                    <td className="px-6 py-5 font-medium">
                      <Skeleton width={150} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={100} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={150} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <Skeleton width={80} />
                    </td>
                    <td className="px-6 py-5 font-medium ">
                      <div className="flex items-center gap-2">
                        <Skeleton width={80} height={24} />
                      </div>
                    </td>
                  </tr>
                ))
              : orders?.map((order) => (
                  <tr
                    key={order._id}
                    className="text-xs border-b bg-[rgba(255,255,255,0.2)]"
                  >
                    <td className="px-6 py-5 font-medium">
                      {order.transactionId}
                    </td>
                    <td className="px-6 py-5 font-medium ">{dateObject}</td>
                    <td className="px-6 py-5 font-medium ">{order.email}</td>
                    <td className="px-6 py-5 font-medium ">{order.price}</td>
                    <td>
                      <button
                        onClick={() => handleChangeStatus(order._id)}
                        className={`inline-block px-3 py-1 text-center ${
                          order.status === "pending"
                            ? "text-green-600 bg-green-100"
                            : order.status === "Delivered"
                            ? "text-[#ffcc00] bg-[rgb(255,204,0,0.2)]"
                            : ""
                        } rounded-full`}
                      >
                        {order.status}
                      </button>
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

export default ManageOrders;
