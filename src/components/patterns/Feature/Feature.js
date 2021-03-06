import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import Box from '../../core/Box';
import Heading from '../../core/Heading';
import Text from '../../core/Text';

const Feature = ({ as, children }) => (
	<Stack gap={2} as={as}>
		{children}
	</Stack>
);

// width={80}
Feature.Icon = ({ children }) => (
	<Box mx="auto" color="secondary">
		{children}
	</Box>
);

Feature.Heading = ({ children }) => (
	<Heading as="h3" size="l" align="center">
		{children}
	</Heading>
);

Feature.Body = ({ children }) => <Text align="center">{children}</Text>;

Feature.propTypes = {
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Feature;
