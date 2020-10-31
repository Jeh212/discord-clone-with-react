import React from 'react';
import {Container,Category,AddCategoryIcon} from './styles'
// import ChannelButton from '../ChannelButton'




const ServerName: React.FC = () => {

    return (
       <Container>
           <Category>
               <span>Canais de Text</span>
               <AddCategoryIcon/>
           </Category>
        
        {/* <ChannelButton channelName="chat-livre" />
        <ChannelButton channelName="Trabalho" />
        <ChannelButton channelName="Lolzinho" />
        <ChannelButton channelName="Valorant" />
        <ChannelButton channelName="Counter Strike Global Ofensive" /> */}

       </Container>
    )

}

export default ServerName;