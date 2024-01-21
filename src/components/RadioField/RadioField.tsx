import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";

type RadioOption = {
  label: string;
  value: string;
};

interface RadioFieldProps {
  name: string;
  label: string;
  options: RadioOption[];
  error?: FieldError;
}

const RadioField = ({ name, label, options, error }: RadioFieldProps) => {
  const { register, getValues } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={getValues(name)}>
        <Stack direction="row" gap={5}>
          {options.map((option) => (
            <Radio key={option.value} value={option.value} {...register(name)}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export { RadioField };
