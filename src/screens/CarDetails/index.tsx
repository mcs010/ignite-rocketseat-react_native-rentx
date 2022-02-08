import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import gearboxSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    About,
    Footer,
} from './styles';

export function CarDetails(){
    return (
        <Container>

            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlider 
                    imagesUrl={["https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png"]} 
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Per day</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name='380Km/h' icon={speedSvg} />
                    <Acessory name='3.2' icon={accelerationSvg} />
                    <Acessory name='800 HP' icon={forceSvg} />
                    <Acessory name='Gas' icon={gasolineSvg} />
                    <Acessory name='Auto' icon={gearboxSvg} />
                    <Acessory name='2 people' icon={peopleSvg} />
                </Acessories>
                
                <About>
                    This is an sports vehicle. Came out from the legendary fighting bull pardoned in the Real 
                    Maestranza square in Seville. It is a stunning car for who loves to accelerate.
                </About>
            </Content>

            <Footer>
                <Button title='Confirm' />
            </Footer>

        </Container>
    );
}