import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, space } from 'styled-system';

/**
 * A text heading.
 */
const Heading = styled.h1.attrs({
	m: 0,
})`
	${space};
	line-height: ${themeGet('lineHeights.heading')};
	font-family: ${themeGet('fonts.heading')};
	font-weight: ${props => props.theme.headingFontWeights[props.size]};
	font-size: ${props => props.theme.fontSizes[props.size]};
	color: ${themeGet('colors.base')};
	text-align: ${props => props.align};
`;

Heading.propTypes = {
	/** Custom component or HTML tag */
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.oneOf(['xxxl', 'xxl', 'xl', 'l', 'm']),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	children: PropTypes.node,
};

Heading.defaultProps = {
	size: 'xxl',
};

/** @component */
export default Heading;
