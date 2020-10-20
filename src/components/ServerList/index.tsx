import React from 'react';
import {Container,Separator} from './styles'





const ServerList:React.FC = () =>{

return (
    <Container>
        <ServerButton isHome=""/>

        <Separator/>

        <ServerButton />
        <ServerButton hasNotification/>
        <ServerButton mentions={3}/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton hasNotification/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton mention={72}/>
        <ServerButton/>

    </Container>
)

}