import { useState } from "react";
import { Alert, Form, Spinner } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Feedback, Tab } from "../../components";
import { chartOptions } from "./chartOptions";
import { countBitsInString, countChangedBits } from "./utils";
import { useChartQuery, useMessage, useDebounce } from "../../hooks";
import { useHashAlgorithm } from "../../context/useAlgorithm";

const DEFAULT_CHART_DATA = {
  labels: [],
  datasets: [{ label: "", data: [] }],
};

export function AvalancheEffect() {
  const {
    query: { data: message },
  } = useMessage();
  const { hashAlgorithm } = useHashAlgorithm();

  const [bitToFlip, setBitToFlip] = useState("1");
  const debouncedBitToFlip = useDebounce(bitToFlip);
  const chartQuery = useChartQuery(debouncedBitToFlip);

  const { data: chartData = DEFAULT_CHART_DATA, isLoading: isChartLoading } =
    chartQuery;

  chartData.datasets[0].label = `Кількість бітів, що змінилися у хеші при зміні ${bitToFlip} біта у повідомленні`;

  return (
    <Tab.Content As={Form}>
      <Tab.Header>Лавинний ефект</Tab.Header>
      {message ? (
        <>
          <span>
            Отримане повідомлення:{" "}
            <span className="text-primary fw-bold">{message}</span>, алгоритм:{" "}
            <span className="text-primary fw-bold">
              {hashAlgorithm.toUpperCase()}
            </span>
            , змінений біт:{" "}
            <span className="text-primary fw-bold">{bitToFlip}</span>
          </span>
          <Form.Group className="d-flex align-items-center">
            <Form.Range
              min={1}
              max={countBitsInString(message)}
              step={1}
              value={bitToFlip}
              onChange={e => setBitToFlip(e.target.value)}
              className="me-3"
            />
            <Form.Text className="mx-2 mt-0">{bitToFlip}</Form.Text>
          </Form.Group>
        </>
      ) : (
        <span>
          {!message &&
            "Щоб дослідити лавинний ефект, потрібно щоб повідомлення мало принаймні один символ!"}
        </span>
      )}
      <div className="position-relative">
        {isChartLoading && (
          <div className="position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center">
            {<Spinner />}
          </div>
        )}
        <Line
          style={
            isChartLoading
              ? {
                  filter: "blur(2px)",
                }
              : undefined
          }
          options={chartOptions}
          data={chartData}
        />
      </div>
      <Alert variant="primary">
        Загальна кількість змінених біт:{" "}
        {countChangedBits(chartData?.datasets[0].data)}
      </Alert>
      <Feedback on={chartQuery} hideSuccess />
    </Tab.Content>
  );
}
