import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Chevron from './icons/Chevron';

/* Style the accordion section */
const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.p`
	margin: 0;
`;

const AccordionHead = styled.button`
	background-color: ${props =>
		props.active ? props.backgroundColorHover : props.backgroundColor};
	color: ${props => props.color};
	cursor: pointer;
	padding: 1em;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1rem;
	border: none;
	outline: none;
	transition: background-color 0.6s ease;

	&:hover {
		background-color: ${props => props.backgroundColorHover};
	}
`;

const StyledChevron = styled(Chevron)`
	margin-left: auto;
	transform: ${({ active }) => (active ? 'rotate(90deg)' : 'rotate(0)')};
	transition: transform 0.25s ease;
`;

/* Style the accordion chevron icon */
// .accordion__icon {
//   margin-left: auto;
//   transition: transform 0.6s ease;
// }

/* Style to rotate icon when state is active */
// .rotate {
//   transform: rotate(90deg);
// }

const AccordionBody = styled.div`
	background-color: white;
	overflow: hidden;
	max-height: ${props => props.maxHeight};
	transition: max-height 0.25s ease;
`;

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
