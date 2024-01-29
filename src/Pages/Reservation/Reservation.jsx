import toast from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Reservation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const guest = form.guest.value;
    const date = form.date.value;
    const timeValue24 = form.time.value;
    const user = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const time = new Date(`2000-01-01T${timeValue24}`);
    const time12HourFormat = time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const bookingData = {
      guest,
      date,
      time: time12HourFormat,
      user,
      email,
      phone,
      status: "Pending",
    };
    axiosSecure.post("/reservation", bookingData).then((res) => {
      if (res.data.insertedId) {
        form.reset();
        toast.success("Your Booking Processing");
      }
    });
  };

  return (
    <>
      <SectionTitle heading="Make a Reservation" subHeading="Indulge" />

      <div className="flex items-center justify-center p-12">
        <div className="mx-auto  max-w-4xl bg-white px-10 pt-20 pb-10 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-3 ">
              {/* guest select  */}
              <div className="px-3">
                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Guest
                  </label>
                  <select
                    name="guest"
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-[14px] px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#0cb14b] focus:shadow-md"
                  >
                    <option value="">Select Guest</option>
                    <option value="1-3">1-3</option>
                    <option value="4-10">4-10</option>
                    <option value="11+">11+</option>
                  </select>
                </div>
              </div>
              {/* guest select  */}
              {/* Date select  */}

              <div className="px-3">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    name="date"
                    id="date"
                    className="w-full rounded-md  border border-[#e0e0e0] bg-white p-3 text-sm font-medium text-[#6B7280] outline-none focus:border-[#0cb14b] focus:shadow-md"
                  />
                </div>
              </div>
              {/* Date select  */}
              {/* Time select  */}
              <div className="px-3 ">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    required
                    className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white p-3  font-medium text-[#6B7280] outline-none focus:border-[#0cb14b] focus:shadow-md"
                  />
                </div>
              </div>

              {/* Time select  */}
            </div>

            <div className="grid grid-cols-3 gap-3 pb-5">
              <div className="px-3 ">
                <label
                  htmlFor="name"
                  className="mb-3  text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  defaultValue={user?.displayName}
                  placeholder="Name.."
                  className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white p-3  font-medium text-[#6B7280] outline-none focus:border-[#0cb14b] focus:shadow-md"
                />
              </div>
              <div className="px-3 ">
                <label
                  htmlFor="phone"
                  className="text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  placeholder="phone.."
                  className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white p-3  font-medium text-[#6B7280] outline-none focus:border-[#0cb14b] focus:shadow-md"
                />
              </div>
              <div className="px-3 ">
                <label
                  htmlFor="email"
                  className="mb-3  text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  disabled
                  className="w-full rounded-md text-sm border border-[#e0e0e0] bg-white p-3  font-medium text-[#6B7280] outline-none focus:border-[#0cb14b] focus:shadow-md"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#0cb14b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
