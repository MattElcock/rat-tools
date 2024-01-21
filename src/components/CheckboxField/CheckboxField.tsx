import {
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import {
  Controller,
  ControllerRenderProps,
  FieldError,
  Merge,
  useFormContext,
} from "react-hook-form";

type CheckboxOption = {
  label: string;
  value: string;
};

interface CheckboxFieldProps {
  name: string;
  label: string;
  options: CheckboxOption[];
  error?: Merge<FieldError, (FieldError | undefined)[]>;
}

const CheckboxField = ({ name, label, options, error }: CheckboxFieldProps) => {
  const { control } = useFormContext();

  const handleCheckboxChange = (
    option: string,
    checked: boolean,
    field: ControllerRenderProps
  ) => {
    const currentFieldValue = field.value || [];
    let newFieldValue: string[] = [];

    if (checked) {
      // Assume field was previously unchecked and therefore doesn't exist in currentFieldValue yet
      newFieldValue = [...currentFieldValue, option];
    } else {
      // Assume field was previously checked and therefore remove it from the array
      const index = currentFieldValue.findIndex((x: string) => x === option);
      newFieldValue = currentFieldValue.toSpliced(index, 1);
    }

    return field.onChange(newFieldValue);
  };

  return (
    <FormControl
      isInvalid={Boolean(error)}
      aria-invalid={Boolean(error)}
      as="fieldset"
    >
      <FormLabel as="legend">{label}</FormLabel>
      <Stack>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" rowGap={2}>
          {options.map((option) => (
            <Controller
              key={option.value}
              name={name}
              control={control}
              render={({ field }) => (
                <Checkbox
                  value={option.value}
                  defaultChecked={field.value?.includes(option.value)}
                  onChange={(e) =>
                    handleCheckboxChange(option.value, e.target.checked, field)
                  }
                >
                  {option.label}
                </Checkbox>
              )}
            />
          ))}
        </Box>
      </Stack>
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export { CheckboxField };
