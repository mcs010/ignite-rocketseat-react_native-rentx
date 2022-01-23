import React from 'react';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.svg'; //Being used as a component (install react native svg library to deal with svg and
// install react native svg transformer to deal with it as a component)

import {
    Container,
    Header,
} from './styles';

export function Home(){
    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <Logo />
            </Header>
        </Container>
    );
}