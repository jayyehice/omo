import React, { Component } from "react";
import Faq from './Faq';
import OMOIntroduction from './OMOIntroduction';

const About = (props) => {
    return (
        <div className="mx-auto w-8/12 mt-5">
            <OMOIntroduction className="p-2"/>
            <Faq className="p-2"/>
        </div>
    );
};

export default About;