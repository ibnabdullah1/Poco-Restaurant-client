import SectionTitle from "../SectionTitle/SectionTitle";

const ManageBookings = () => {
  return (
    <>
      <SectionTitle subHeading={"Bookings"} heading={"Manage Booking"} />

      <div className="p-10 overflow-x-auto rounded-md bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-xs text-left text-gray-800 ">
              <th className="px-6 pb-3 font-medium">Transaction ID</th>
              <th className="px-6 pb-3 font-medium ">Date </th>
              <th className="px-6 pb-3 font-medium">Email </th>
              <th className="px-6 pb-3 font-medium">Status </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs bg-gray-100 rounded-md">
              <td className="px-6 py-5 font-medium">018276td45</td>
              <td className="px-6 py-5 font-medium ">08.4.2021</td>
              <td className="px-6 py-5 font-medium ">abc@gmail.com</td>
              <td>
                <span className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">
                  Completed
                </span>
                <span className="inline-block px-2 py-1 text-center text-red-600 bg-red-100 rounded-full dark:text-red-700 dark:bg-red-200">
                  Cancelled
                </span>
                <span className="inline-block px-2 py-1 text-center text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBookings;
