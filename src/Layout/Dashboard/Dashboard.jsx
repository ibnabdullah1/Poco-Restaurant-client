import useRole from "../../Hooks/useRole";
import AdminDashboard from "./Admin/AdminDashboard";
import UserDashboard from "./User/UserDashboard";

const Dashboard = () => {
  const { userRole } = useRole();

  return (
    <>
      {userRole === "admin" && <AdminDashboard />}
      {userRole === "user" && <UserDashboard />}
    </>
  );
};

export default Dashboard;
