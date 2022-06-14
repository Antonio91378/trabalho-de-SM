import React from 'react';

interface FormInputsProps {
 
}

const FormInputs: React.FC<FormInputsProps> = ({  }) => {
    return (
        <div className="form">
            <h3>Defina as entradas</h3>
            <div id="formInputs">
                <a href="#">X</a>
                <input type="text" />
                <a href="#">X</a>
                <input type="text" />
                <a href="#">X</a>
                <input type="text" />
                <a href="#">X</a>
                <input type="text" />
                <a href="#">X</a>
                <input type="text" />
            </div>
        </div>
    );
};

export default FormInputs;
