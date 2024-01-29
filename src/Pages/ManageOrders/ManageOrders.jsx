import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const ManageOrders = () => {
  const [noData, setNoData] = useState();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: orders = [],
    isLoading,
    isError,
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
              <th className="px-6 pb-3 font-medium ">Date </th>
              <th className="px-6 pb-3 font-medium">Email </th>
              <th className="px-6 pb-3 font-medium">Pay </th>
              <th className="px-6 pb-3 font-medium">Status </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr
                key={order._id}
                className="text-xs border-b bg-[rgba(255,255,255,0.2)] "
              >
                <td className="px-6 py-5 font-medium">{order.transactionId}</td>
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

export default ManageOrders;
