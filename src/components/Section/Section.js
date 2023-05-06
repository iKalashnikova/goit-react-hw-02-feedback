import React, { Component } from 'react';
import { Title } from './Section.styled';

export const Section = ({title, children}) => {return (
    <section>
        <Title> {title}</Title>
        {children}
    </section>)
}
