import React from 'react';

interface PrimaryBrnProps {
  Text:String;
}

const PrimaryBrn: React.FC<PrimaryBrnProps> = ({ Text }) => {
    return (
        <div className="primary-btn">
            <p>{Text}</p>
        </div>
    );

};

export default PrimaryBrn;
