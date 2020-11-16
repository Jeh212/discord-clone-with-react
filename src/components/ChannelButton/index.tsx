import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingIcon } from './styles';

export interface Props {
	channelName: string;
	selected?: boolean;
	iconSelected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected, iconSelected }) => {
	return (
		<Container className={selected ? 'active' : ''}>
			<div className={selected ? 'active' : ''}>
				<HashtagIcon  />
				<span>{channelName}</span>
			</div>

			<div className={selected ? 'active' : ''}>
				<InviteIcon />
				<SettingIcon />
			</div>
		</Container>
	);
};

export default ChannelButton;
