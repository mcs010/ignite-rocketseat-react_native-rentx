import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg'; //Being used as a component (install react native svg library to deal with svg and
// install react native svg transformer to deal with it as a component)

import { Car } from '../../components/Car';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList,
} from './styles';

export function Home(){
    const carData = {
        brand: "Audi",
        name: "RS 5 Coupé",
        rent: {
            period: "Per day",
            price: 120,
        },
        thumbnail: "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png",
    }

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
                        Total of 12 cars
                    </TotalCars>
                </HeaderContent>
            </Header>


            <CarList 
                data={[1, 2, 3, 4, 5, 6, 7]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData} />}
            />

        </Container>
    );
}