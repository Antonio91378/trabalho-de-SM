import React from 'react';

interface SubBoxProps {
    children:React.ReactNode;
}

const SubBox: React.FC<SubBoxProps> = ({ children }) => {
    return (
        <div className="sub-box">
            {children}
        </div>
    );
};

export default SubBox;
