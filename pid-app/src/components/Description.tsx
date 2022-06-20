import React from "react";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = ({}) => {
  return (
    <div className="form">
      <p className="descrition">Informações</p>
      <div className="form-inputs">
        <div className="description-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            quod autem rem temporibus iste libero excepturi deleniti doloribus
            saepe et! Maxime harum sequi itaque consequuntur eaque provident
            odit reiciendis incidunt? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Officiis accusamus doloremque, reiciendis quod,
            delectus voluptas, et culpa ea expedita quo debitis explicabo neque
            odio voluptatibus cumque soluta est? Qui, tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
