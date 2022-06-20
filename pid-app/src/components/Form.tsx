import React from "react";
import { useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { database } from "../services/firebase";

interface FormInputsProps {}

const FormInputs: React.FC<FormInputsProps> = ({}) => {
  const ref1 = ref(database, "clientValues");
  const [Kp, setKp] = useState();
  const [Ki, setKi] = useState();
  const [Kd, setKd] = useState();
  const [N, setN] = useState();
  const [T, setT] = useState();
  useEffect(() => {}, []);
  return (
    <div className="form">
      <form action="#">
        <p className="descrition">Defina as constantes</p>
        <div className="form-inputs">
          <div>
            <p className="individual">
              Kp<span>:</span>
            </p>
            <input type="text" />
          </div>
          <div>
            <p className="individual">
              Ki<span>:</span>
            </p>
            <input type="text" />
          </div>
          <div>
            <p className="individual">
              Kd<span>:</span>
            </p>
            <input type="text" />
          </div>
          <div>
            <p className="individual">
              N<span>:</span>
            </p>
            <input type="text" />
          </div>
          <div>
            <p className="individual">
              T<span>:</span>
            </p>
            <input type="text" />
          </div>
        </div>
        <div className="primary-btn" id="input-save">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default FormInputs;
