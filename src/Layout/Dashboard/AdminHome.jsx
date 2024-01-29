import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AiFillIdcard } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: "admin_stats",
    queryFn: async () => {
      const res = await axiosSecure.get("/admin_stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-medium">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back!"}
      </h2>
      <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <AiFillIdcard className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">
              {stats?.totalRevenue?.toFixed(1)}
            </h2>{" "}
            <p className="text-2xl font-normal">Revenue</p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <PiUsersThreeFill className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold">{stats?.users}</h2>{" "}
            <p className="text-2xl font-normal">Customers</p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <SiCodechef className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">{stats?.menuItems}</h2>{" "}
            <p className="text-2xl font-normal">Products</p>
          </div>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background: "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)",
          }}
          className="py-5 px-10 text-white flex gap-4 justify-center items-center"
        >
          <div>
            <TbTruckDelivery className="text-5xl font-extrabold" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">{stats?.orders}</h2>
            <p className="text-2xl font-normal">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
