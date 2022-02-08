import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';

export function Scheduling(){
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton 
                    onPress={() => {}}
                    color={theme.colors.shape}
                />

                <Title>
                    Choose an {'\n'}
                    start date and {'\n'}
                    end date for the rent
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>From</DateTitle>
                        <DateValue selected={false} >
                            18/06/2021
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>Until</DateTitle>
                        <DateValue selected={false} >
                            18/06/2021
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title='Confirmar' />
            </Footer>
        </Container>
    );
}