import useAuth from "../../../Hooks/useAuth";
import AdminDashboard from "../Admin/AdminDashboard";

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <section className="px-4 pt-6">
        <h2 className="text-xl font-medium mb-4">
          Hi, Welcome
          <span className="text-[#0cb14b] text-2xl">
            {user?.displayName ? " " + user?.displayName : "Back!"}
          </span>
        </h2>
        <AdminDashboard />
      </section>
    </>
  );
};

export default UserDashboard;
