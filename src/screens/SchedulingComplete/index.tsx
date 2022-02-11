import React from 'react';
import { useWindowDimensions } from 'react-native'; // useWindowDimensions used in react components

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg'

import { ConfirmButton } from '../../components/ConfirmButton';

import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles';

export function SchedulingComplete(){

    const { width } = useWindowDimensions();
    console.log(width)

    return (
        <Container>
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Car rented!</Title>

                <Message>
                    Now you just need to go {'\n'}
                    to a RENTX dealership {'\n'}
                    to get your vehicle.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title='OK' />
            </Footer>

        </Container>
    );
}