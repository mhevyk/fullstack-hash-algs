import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const chartOptions = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "Раунд обчислення хеш-функції",
        padding: { top: 25 },
      },
    },
    y: {
      ticks: {
        stepSize: 1,
      },
      title: {
        display: true,
        text: "Кількість бітів, що змінилися",
        padding: { bottom: 25 },
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Графік залежності числа бітів, що змінилися в хеші, від раунду обчислення хеш-функції",
      font: {
        size: 12,
      },
    },
  },
};
