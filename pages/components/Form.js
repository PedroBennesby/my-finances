/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';
import NumberFormat from 'react-number-format';
import { usePercentages } from '../../contexts/percentagesProvider';

const Form = () => {
  const [salary, setSalary] = useState(null);
  const [percentages, setPercentages] = useState({
    investments: 20,
    rent: 30,
    transportation: 10,
    food: 20,
    shopping: 20,
  });
  const { percentagesValues, setPercentagesValues } = usePercentages();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPercentagesValues({
      investments: salary * (percentages.investments / 100),
      rent: salary * (percentages.rent / 100),
      transportation: salary * (percentages.transportation / 100),
      food: salary * (percentages.food / 100),
      shopping: salary * (percentages.shopping / 100),
    });
  };

  const renderSliderInput = (percentageType) => {
    return (
      <Flex direction='column' gap='5px'>
        <Text fontWeight='bold'>
          How much you want to save for {percentageType}?
        </Text>
        <Flex>
          <NumberInput
            maxW='100px'
            mr='2rem'
            value={percentages[percentageType]}
            onChange={(value) =>
              setPercentages({ ...percentages, [percentageType]: value })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Slider
            flex='1'
            focusThumbOnChange={false}
            value={percentages[percentageType]}
            onChange={(value) =>
              setPercentages({ ...percentages, [percentageType]: value })
            }
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb
              fontSize='sm'
              boxSize='32px'
              children={percentages[percentageType]}
            />
          </Slider>
        </Flex>
      </Flex>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction='column' gap='10px' p='20px'>
        <Text fontWeight='bold'>How much was your salary this month?</Text>
        <NumberFormat
          thousandSeparator={true}
          allowEmptyFormatting={true}
          prefix={'R$ '}
          inputMode='numeric'
          value={salary}
          onValueChange={(values) => setSalary(values.value)}
        />
        {renderSliderInput('investments')}
        {renderSliderInput('rent')}
        {renderSliderInput('transportation')}
        {renderSliderInput('food')}
        {renderSliderInput('shopping')}
        <Button mt='10px' type='submit' colorScheme='green'>
          Calculate
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
