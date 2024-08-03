import { useState } from "react";
import Chart from "react-apexcharts";
import { IoIosArrowDown } from "react-icons/io";
import "./SalesChart.css";
import { salesOptions } from "./SalesOptions";

const SalesChart = () => {
  const [selectedOption, setSelectedOption] = useState("2023");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [state] = useState({
    series: [
      {
        name: "Sales",
        data: [130, 210, 300, 290, 150, 50, 210, 280, 105],
      },
      {
        name: "Purchase",
        data: [-150, -90, -50, -180, -50, -70, -100, -90, -105],
      },
    ],
  });

  return (
    <div className="relative col-span-7 w-full mt-3 rounded-lg border border-stroke shadow-default lg:col-span-7 ">
      <div className="md:flex items-center justify-between px-5 border-b py-4">
        <h2 className="text-[20px] font-semibold">Purchase & Sales</h2>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="size-[12px] bg-[#28c76f] rounded-full" />
              <p className="text-secondary">Sales</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-[12px] bg-[#ea5455] rounded-full" />
              <p className="text-secondary">Revenue</p>
            </div>
          </div>

          <div className="relative inline-block ">
            <div
              className="relative flex w-[80px] bg-slate-100/50 hover:bg-slate-100 justify-between items-center z-10 rounded text-secondary py-1 pl-2 pr-1 text-sm font-medium cursor-pointer"
              onClick={toggleDropdown}
            >
              {selectedOption}
              <IoIosArrowDown
                className={isOpen ? "rotate-180 duration-300" : "duration-300"}
              />
            </div>
            {isOpen && (
              <div className="absolute z-10 w-[140px] rounded  mt-1  bg-white border  shadow-none">
                {["2023", "2024", "2025"].map((option) => (
                  <div
                    key={option}
                    className="py-1 px-3 text-sm text-secondary hover:text-primary cursor-pointer hover:bg-[rgb(255,159,67,0.08)]"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Chart
        options={salesOptions}
        series={state.series}
        type="bar"
        height={335}
      />
    </div>
  );
};

export default SalesChart;

// const salesOptions = {
//   colors: ["#ea5455", "#28c76f"],
//   chart: {
//     fontFamily: "nunito, sans-serif",
//     type: "bar",
//     height: 335,
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: false,
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 1536,
//       options: {
//         plotOptions: {
//           bar: {
//             borderRadius: 3,
//             columnWidth: "20%",
//           },
//         },
//       },
//     },
//   ],
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       borderRadius: 3,
//       columnWidth: "20%",
//       borderRadiusApplication: "end",
//       borderRadiusWhenStacked: "last",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   xaxis: {
//     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
//   },
//   legend: {
//     position: "top",
//     horizontalAlign: "left",
//     fontFamily: "nunito, sans-serif",
//     fontWeight: 500,
//     fontSize: "14px",
//     markers: {
//       radius: 99,
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// const SalesChart = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [state] = useState({
//     series: [
//       {
//         name: "Revenue",
//         data: [33, 23, 20, 8, 13, 27, 15, 22, 43],
//       },
//       {
//         name: "Sales",
//         data: [84, 35, 41, 37, 22, 23, 45, 35, 57],
//       },
//     ],
//   });}
