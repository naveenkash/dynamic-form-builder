import data from "./sample.json";

export default function Home() {
  return (
    <div>
      {data.data.map((item) => (
        <div key={item.id}>{item.label}</div>
      ))}
    </div>
  );
}
