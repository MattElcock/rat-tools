import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from "@chakra-ui/react";

type CheckboxOption = {
  label: string;
  value: string;
};

interface CheckboxFieldProps {
  label: string;
  options: CheckboxOption[];
  mutuallyExclusiveOptions?: CheckboxOption[];
}

const CheckboxField = ({
  label,
  options,
  mutuallyExclusiveOptions,
}: CheckboxFieldProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Stack>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" rowGap={2}>
          {options.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </Box>
        <Text>Or</Text>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" rowGap={2}>
          {mutuallyExclusiveOptions &&
            mutuallyExclusiveOptions.map((option) => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
        </Box>
      </Stack>
    </FormControl>
  );
};

export { CheckboxField };
