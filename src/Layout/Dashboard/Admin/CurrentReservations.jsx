import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import useLatestReservations from "../../../Hooks/LatestReservations";

const CurrentReservations = () => {
  const { latestReservations, isLoading } = useLatestReservations();

  return (
    <div className="bg-white text-secondary/80 mt-4 rounded">
      <div className="flex justify-between items-center mb-3 border-b p-6">
        <h1 className="font-semibold">Current Reservations</h1>
        <Link
          to={"/dashboard/managebookings"}
          className="font-semibold hover:text-primary text-sm"
        >
          View All
        </Link>
      </div>
      <div className="px-5  pb-6">
        <div className="max-w-screen-lg  overflow-x-auto overflow-hidden  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary ">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left text-gray-600 font-medium text-[13px] w-[140px]">
                  Name
                </th>
                <th className="py-3 text-left text-gray-600 font-medium text-[13px] w-[140px]">
                  Date/Time
                </th>
                <th className="py-3 text-center text-gray-600 font-medium text-[13px] w-[60px] ">
                  People
                </th>
                <th className="py-3 text-right text-gray-600 font-medium text-[13px] ">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="">
                      <td className="py-3 ">
                        <Skeleton width={100} />
                      </td>
                      <td className="py-3  ">
                        <Skeleton width={70} />
                      </td>
                      <td className="py-3  ">
                        <Skeleton width={50} />
                      </td>
                      <td className="py-3">
                        <Skeleton width={80} />
                      </td>
                    </tr>
                  ))
                : latestReservations.map(
                    ({ user, time, guest, status, date }, i) => (
                      <tr key={i} className="">
                        <td className="py-3 text-left text-[13px] font-medium  text-secondary/70 ">
                          {user}
                        </td>
                        <td className="py-3 text-left text-secondary/40 text-[13px] ">
                          <p>
                            {date}-{time}
                          </p>
                        </td>
                        <td className="py-3 text-center text-secondary/40 text-[13px] ">
                          {guest}
                        </td>
                        <td className="py-3 w-[90px] text-right text-[13px] ">
                          <span
                            className={`${
                              status === "Confirmed"
                                ? "text-green-500"
                                : status === "Canceled"
                                ? "text-red-500"
                                : status === "Pending"
                                ? "text-blue-gray-300"
                                : ""
                            } py-1 text-sm rounded-full font-medium`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentReservations;
