import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Chevron from './icons/Chevron';

const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.p`
	margin: 0;
`;

const AccordionHead = styled.button`
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	cursor: pointer;
	padding: 1em;
	display: flex;
	align-items: center;
	font-size: 1.1rem;
	border: none;
	outline: none;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${props => props.backgroundColorHover};
	}
`;

const StyledChevron = styled(Chevron)`
	margin-left: auto;
	transform: ${({ active }) => (active ? 'rotate(90deg)' : 'rotate(0)')};
	transition: transform 0.25s ease;
`;

const AccordionBody = styled.div`
	overflow: hidden;
	max-height: ${props => props.maxHeight};
	transition: max-height 0.25s ease;
`;

/**
 * Accordion based on the following article,
 * https://medium.com/skillthrive/build-a-react-accordion-component-from-scratch-using-react-hooks-a71d3d91324b.
 */
const Accordion = ({ children, title, theme, defaultActive }) => {
	const [active, setActive] = useState(defaultActive);
	const [height, setHeight] = useState('0px');

	const content = useRef(null);

	useEffect(() => {
		if (content.current && active) {
			setHeight(`${content.current.scrollHeight}px`);
		}
	}, [content, active]);

	const toggleAccordion = () => {
		setActive(!active);
		setHeight(!active ? `${content.current.scrollHeight}px` : '0px');
	};

	return (
		<AccordionSection>
			<AccordionHead
				active={active}
				backgroundColor={theme.primary}
				backgroundColorHover={theme.primaryHover}
				color={theme.primaryText}
				onClick={toggleAccordion}
			>
				<Title>{title}</Title>
				<StyledChevron active={active} width={10} fill={theme.primaryText} />
			</AccordionHead>
			<AccordionBody ref={content} maxHeight={height}>
				{children}
			</AccordionBody>
		</AccordionSection>
	);
};

Accordion.defaultProps = {
	defaultActive: false
};

const mapStateToProps = state => ({
	theme: state.theme
});

export default connect(mapStateToProps)(Accordion);
