import React from "react";
import {Meta, Story} from '@storybook/react';
import {Actions} from "../components/Actions";
import {store} from "../redux/store";
import {Provider} from "react-redux";
import styled from "styled-components";
import { Action } from "../styled/Action";

export default {
	title: 'NextGMP/Actions',
	component: Actions,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Wrapper>
					Наведи курсор на серую область
					<Story/>
				</Wrapper>
			</Provider>
		)
	],
} as Meta

export const Primary: Story = (args) => <Actions id={args.id} {...args} />
Primary.args = {
	id: 123,
}

const Wrapper = styled.div`
	background: lightgray;
	position: relative;
	width: 300px;
	height: 300px;
	padding: 8px;
	tab-index: 0;
	
	&:hover ${Action} {
		display: block;
	}
`
