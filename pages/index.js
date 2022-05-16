import Description from "../components/Description";
import Map from "../components/Map";
import LineChart from "../components/LineChart";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Description />
      <Map />
      <LineChart />
    </div>
  );
}
