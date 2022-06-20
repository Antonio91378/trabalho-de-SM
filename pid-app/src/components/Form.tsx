import React from "react";

interface FormInputsProps {}

const FormInputs: React.FC<FormInputsProps> = ({}) => {
  return (
    <div className="form">
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
        Salvar
      </div>
    </div>
  );
};

export default FormInputs;
