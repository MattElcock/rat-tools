import {
  InputProps,
  FormLabelProps,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";

interface TextFieldProps {
  label: string;
  helperText?: string;
  inputProps?: InputProps;
  labelProps?: FormLabelProps;
  rightAddon?: string;
}

const TextField = ({
  label,
  helperText,
  inputProps,
  labelProps,
  rightAddon,
}: TextFieldProps) => {
  return (
    <FormControl>
      <FormLabel {...labelProps}>{label}</FormLabel>
      {helperText && (
        <FormHelperText marginBottom={2}>{helperText}</FormHelperText>
      )}
      <InputGroup>
        <Input {...inputProps} />
        {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
      </InputGroup>
    </FormControl>
  );
};

export { TextField };
