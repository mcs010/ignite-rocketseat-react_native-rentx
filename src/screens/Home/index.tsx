import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg'; //Being used as a component (install react native svg library to deal with svg and
// install react native svg transformer to deal with it as a component)

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
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
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
        </Container>
    );
}