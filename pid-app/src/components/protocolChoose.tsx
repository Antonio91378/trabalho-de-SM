import React from 'react';

interface ProtocolChooseProps {
   
}

const ProtocolChoose: React.FC<ProtocolChooseProps> = ({  }) => {
    return (
       <div className="input">
        <p>Escolha o protocolo de comunicação desejável: <span>MQTT</span><span>HTPP</span></p>
       </div>
    );
};

export default ProtocolChoose;
