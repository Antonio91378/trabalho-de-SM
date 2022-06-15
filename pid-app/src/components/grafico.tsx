import React, { ReactNode, useEffect, useState } from "react";
import { database } from "../services/firebase";
import { onValue, ref, set } from "firebase/database";
import { Chart } from "react-google-charts";

interface GraficoProps {
  children: React.ReactNode;
}

const Grafico: React.FC<GraficoProps> = ({ children }) => {
  const [dado, setDado] = useState([
    ["Tempo", "SP", "PV", "MV"],
    ["", 0, 0, 0],
  ]);

  useEffect(() => {
    const ref1 = ref(database, "frames");
    onValue(ref1, (snapshot) => {
      const data1 = snapshot.val();
      console.log(data1);
      if (data1.frame == null) {
        return <div>Loading</div>;
      }
      setDado([["Tempo", "SP", "PV", "MV"], data1.frame]);
    });
  }, []);

  return (
    <div id="grafico">
      <Chart
        chartType="LineChart"
        width="100%"
        height="300px"
        data={dado}
        options={options}
      />
    </div>
  );
};

// export const data =

export const options = {
  title: "Gráfico PID [Graus célsius pelo tempo]",
  curveType: "function",
  legend: { position: "bottom" },
};
export default Grafico;
