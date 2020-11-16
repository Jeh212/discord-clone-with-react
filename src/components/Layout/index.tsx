import React from 'react';
import Grid from './styles'
import ServerList from '../ServerList'
import ChannelList from '../ChannelList'
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import UserInfo from '../UserInfo'




const Layout: React.FC = () => {

    return (
       <Grid>
           <ServerList/>
           <ServerName/>
           <ChannelInfo/>
           <ChannelList/>
           <UserInfo/>

       </Grid>
    )

}

export default Layout;