import React from 'react';

interface IntroProps {
    HeroText:string;
}

const Intro: React.FC<IntroProps> = ({ HeroText }) => {
    return (
        <div id="intro">
            <h1>{HeroText}</h1>
        </div>
       );
};


export default Intro;
