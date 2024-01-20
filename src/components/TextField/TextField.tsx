import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";

interface TextFieldProps {
  name: string;
  label: string;
  helperText?: string;
  inputProps?: InputProps;
  labelProps?: FormLabelProps;
  rightAddon?: string;
  error?: FieldError;
}

const TextField = ({
  name,
  label,
  helperText,
  inputProps,
  labelProps,
  rightAddon,
  error,
}: TextFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel {...labelProps}>{label}</FormLabel>
      {helperText && (
        <FormHelperText marginBottom={2}>{helperText}</FormHelperText>
      )}
      <InputGroup>
        <Input {...inputProps} {...register(name)} />
        {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
      </InputGroup>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export { TextField };
