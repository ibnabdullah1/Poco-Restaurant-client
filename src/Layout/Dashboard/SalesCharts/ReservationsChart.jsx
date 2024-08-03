import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ReservationsChart = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const weeklyData = [
    {
      name: "Reservations Per Day",
      data: [10, 20, 15, 50, 30, 20, 35],
    },
  ];

  const monthlyData = [
    {
      name: "Reservations Per Day",
      data: [60, 35, 68, 28, 140, 60, 120, 40],
    },
  ];

  const getCategories = () => {
    if (timeFrame === "weekly") {
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    }
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  };

  const seriesData = timeFrame === "weekly" ? weeklyData : monthlyData;
  const maxYValue = Math.max(...seriesData[0].data);

  const salesAnalytics = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3A857E"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "bar",
      dropShadow: {
        enabled: true,
        color: "#fff",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
      padding: {
        left: 20,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
            padding: {
              left: 10,
            },
          },
          grid: {
            padding: {
              left: 10,
            },
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
            padding: {
              left: 20,
            },
          },
          grid: {
            padding: {
              left: 20,
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "30%",
        distributed: false,
        endingShape: "flat",
      },
    },
    stroke: {
      width: [3],
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        left: 20,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#0cb14b"],
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: getCategories(),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        offsetX: 0,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      labels: {
        formatter: (value) => {
          if (value % 10 === 0) {
            return value;
          }
          return "";
        },
      },
      //   tickAmount: 5,
      max: maxYValue,
    },
  };

  return (
    <div className="col-span-12 rounded bg-white lg:col-span-8 p-6 mt-4">
      <div className="lg:flex items-start justify-between gap-3">
        <h2 className=" font-semibold">Reservations Per Day</h2>

        <div className="flex gap-2">
          <button
            className={`px-3 text-sm py-1 rounded ${
              timeFrame === "weekly"
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setTimeFrame("weekly")}
          >
            Weekly
          </button>
          <button
            className={`px-3 text-sm py-1 rounded ${
              timeFrame === "monthly"
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setTimeFrame("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="-ml-5">
        <ReactApexChart
          options={salesAnalytics}
          series={seriesData}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ReservationsChart;
