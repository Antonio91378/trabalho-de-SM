import React from "react";
import PrimaryBtn from "./PrimaryBtn.tsx";
interface ProtocolChooseProps {}

const ProtocolChoose: React.FC<ProtocolChooseProps> = ({}) => {
  return (
    <div className="input">
      <div className="sub-sub-box">
        <p>Escolha o protocolo de comunicação desejável:</p>
        <div className="flex-row">
            <PrimaryBtn Text="MQTT" />
            <PrimaryBtn Text="HTPP" />
        </div>
      </div>
    </div>
  );
};

export default ProtocolChoose;
