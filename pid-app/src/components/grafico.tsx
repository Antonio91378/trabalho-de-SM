import React, { ReactNode, useEffect, useState } from "react";
import { database } from "../services/firebase";
import { onValue, ref, set } from "firebase/database";

interface GraficoProps {
  children: React.ReactNode;
}

const Grafico: React.FC<GraficoProps> = ({ children }) => {
  return <div id="grafico">{children}</div>;
};

const ref1 = ref(database, "frames");
onValue(ref1, (snapshot) => {
  const a = snapshot.val();
});

export const data = [
  ["Tempo", "SP", "PV", "MV"],
  ["1k", 50, 13, 10],
  ["2k", 50, 70, 10],
  ["3k", 50, 49, 10],
  ["4k", 50, 60, 10],
  ["5k", 50, 45, 10],
  ["6k", 50, 55, 10],
  ["7k", 50, 49, 10],
  ["8k", 50, 51, 10],
];

export const options = {
  title: "Gráfico PID [Graus célsius pelo tempo]",
  curveType: "function",
  legend: { position: "bottom" },
};
export default Grafico;
