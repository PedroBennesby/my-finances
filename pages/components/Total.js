import React from 'react';
import { usePercentages } from '../../contexts/percentagesProvider';

import { Heading, Text, Flex } from '@chakra-ui/react';

const Total = () => {
  const { percentagesValues } = usePercentages();

  return (
    <Flex p='20px' direction='column' gap='20px'>
      {Object.values(percentagesValues).length > 1 && (
        <>
          <Heading>Total</Heading>
          <Text fontWeight='bold'>
            Investments: R$ {percentagesValues.investments}
          </Text>
          <Text fontWeight='bold'>Rent: R$ {percentagesValues.rent}</Text>
          <Text fontWeight='bold'>
            Transportation: R$ {percentagesValues.transportation}
          </Text>
          <Text fontWeight='bold'>Food: R$ {percentagesValues.food}</Text>
          <Text fontWeight='bold'>
            Shopping: R$ {percentagesValues.shopping}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default Total;
