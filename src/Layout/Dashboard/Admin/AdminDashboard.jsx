import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { HiMiniUser } from "react-icons/hi2";
import { MdLocalOffer } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { TbShoppingCartCheck } from "react-icons/tb";
import useLatestReservations from "../../../Hooks/LatestReservations";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ReservationsChart from "../SalesCharts/ReservationsChart";
import SalesAnalytics from "../SalesCharts/SalesAnalytics";
import Weather from "../Weather";
import CurrentReservations from "./CurrentReservations";
import TopSalesItems from "./TopSalesItems";
const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { TotalReservations } = useLatestReservations();
  const { data: stats = {} } = useQuery({
    queryKey: "admin_stats",
    queryFn: async () => {
      const res = await axiosSecure.get("/admin_stats");
      return res.data;
    },
  });

  return (
    <div>
      <Weather />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white px-5 py-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-secondary/70 text-sm font-medium">
                Total Revenue
              </p>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-lg font-semibold text-secondary/80">
                  $
                  <CountUp end={stats.totalRevenue} duration={2.5} />
                  .00
                </p>
                <p className="text-primary/70 text-xs font-semibold">+3.67%</p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <MdLocalOffer className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-secondary/70 text-sm font-medium">
                Total Orders
              </p>
              <div className="flex items-center gap-3 mt-1">
                <p className="  text-lg font-semibold text-secondary/80">
                  <CountUp end={stats.orders} duration={2} />
                </p>
                <p className="text-red-500 text-xs font-semibold">-2.67%</p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <TbShoppingCartCheck className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-secondary/70 text-sm font-medium">
                Total Reservations
              </p>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-lg font-semibold text-secondary/80">
                  <CountUp end={TotalReservations} duration={1.5} />
                </p>
                <p className="text-primary/70 text-xs font-semibold">+2.54%</p>
              </div>
            </div>
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <HiMiniUser className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-secondary/70 text-sm font-medium">
                Total Items
              </p>

              <div className="flex items-center gap-3 mt-1">
                <p className=" ] text-lg font-semibold text-secondary/80">
                  <CountUp end={stats.menuItems} duration={1.5} />
                </p>
                <p className="text-red-500 text-xs font-semibold">-2.67%</p>
              </div>
            </div>

            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <SiCodechef className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <CurrentReservations />
          <ReservationsChart />
        </div>
        <div>
          <SalesAnalytics />
          <TopSalesItems />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
