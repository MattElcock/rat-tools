import {
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

type RadioOption = {
  label: string;
  value: string;
};

interface RadioFieldProps {
  label: string;
  options: RadioOption[];
}

const RadioField = ({ label, options }: RadioFieldProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup>
        <Stack direction="row" gap={5}>
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export { RadioField };
