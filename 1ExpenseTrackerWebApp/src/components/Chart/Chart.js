import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)  // transform from objects to numbers
    const totalMaximum = Math.max(...dataPointValues);  // max wants a list of argument instead of array

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
