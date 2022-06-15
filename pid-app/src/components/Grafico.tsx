import React, { ReactNode, useEffect, useState } from "react";
import { database } from "../services/firebase";
import { onValue, ref, set } from "firebase/database";
import { Chart } from "react-google-charts";

interface GraficoProps {
  children: React.ReactNode; 
}

const Grafico: React.FC<GraficoProps> = () => {
  const [dado, setDado] = useState<any>([
    ["Tempo", "SP", "PV", "MV"],
    ["", 0, 0, 0],
  ]);

  useEffect(() => {
    const ref1 = ref(database, "frames");
    onValue(ref1, (snapshot) => {
      const data1 = snapshot.val();
      var jsonSize = Object.keys(data1).length;
      var i = 0;
      var array1 = ["Tempo", "SP", "PV", "MV"];
      var vetores = [array1];
      for (i = 1; i <= jsonSize; i++) {
        vetores = vetores.concat([data1[`frame${i}`]]);
        setDado(vetores);
      }
    });                                                                                                                                                                                                             
  }, []);

  return (
    <div id="grafico">
      <Chart
        chartType="LineChart"
        width="800px"
        height="300px"
        data={dado}
        options={options}
      />
    </div>
  );
};

export const options = {
  title: "Gráfico PID [Graus célsius pelo tempo]",
  curveType: "function",
  legend: { position: "bottom" },
};
export default Grafico;
