"use client";

import { useCreatePet } from "@/api/root/createPet";
import { Fur } from "@/app/api/graphql/schema/enums/Fur";
import { Metric } from "@/app/api/graphql/schema/enums/Metric";
import { Sex } from "@/app/api/graphql/schema/enums/Sex";
import { Species } from "@/app/api/graphql/schema/enums/Species";
import { CheckboxField } from "@/components/CheckboxField";
import { Form } from "@/components/Form";
import { RadioField } from "@/components/RadioField";
import { TextField } from "@/components/TextField";
import { requiredErrorMessage } from "@/constants/copy";
import { PageSection } from "@/layouts/PageSection";
import { Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";

interface FieldValues {
  name: string;
  dateOfBirth: string;
  sex: string;
  reading: number;
  dateTaken: string;
  fur: string[];
}

const schema = yup.object({
  name: yup.string().required(requiredErrorMessage),
  dateOfBirth: yup.string().required(requiredErrorMessage),
  sex: yup.string().required(requiredErrorMessage),
  reading: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required(requiredErrorMessage),
  dateTaken: yup.string().required(requiredErrorMessage),
  fur: yup
    .array()
    .of(yup.string().required(requiredErrorMessage))
    .required(requiredErrorMessage),
});

const AddNewPet = () => {
  const router = useRouter();
  const { execute, loading } = useCreatePet({
    onSuccess: () => {
      router.push("/pets");
    },
  });

  const handleSubmit = (data: FieldValues) => {
    execute({
      name: data.name,
      dateOfBirth: data.dateOfBirth,
      fur: data.fur as Fur[],
      sex: data.sex as Sex,
      species: Species.Rat,
      weightDateTaken: data.dateTaken,
      weightValue: data.reading,
      weightMetric: Metric.Grams,
    });
  };

  const handleCancel = () => {
    router.push("/pets");
  };

  return (
    <PageSection title="Add a New Pet">
      <Form<FieldValues> onSubmit={handleSubmit} resolver={yupResolver(schema)}>
        {({ formState }) => {
          return (
            <Stack spacing={7}>
              <Stack spacing={5}>
                <TextField
                  name="name"
                  label="Name"
                  error={formState.errors.name}
                />
                <TextField
                  name="dateOfBirth"
                  label="Date of Birth"
                  helperText="If you aren't sure, enter a rough estimate"
                  inputProps={{ type: "date" }}
                  error={formState.errors.dateOfBirth}
                />
                <RadioField
                  name="sex"
                  label="Sex"
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                  error={formState.errors.sex}
                />
                <Stack>
                  <Text fontWeight={600} id="latestWeight">
                    Latest Weight
                  </Text>
                  <Text fontSize="small">
                    It is important to regularly weigh your pet as it helps you
                    recognize sickness sooner.
                  </Text>
                  <TextField
                    name="reading"
                    label="Reading"
                    labelProps={{ fontWeight: 400 }}
                    inputProps={{
                      type: "number",
                      "aria-describedby": "latestWeight",
                    }}
                    rightAddon="grams"
                    error={formState.errors.reading}
                  />
                  <TextField
                    name="dateTaken"
                    label="Date Taken"
                    labelProps={{ fontWeight: 400 }}
                    inputProps={{
                      type: "date",
                      "aria-describedby": "latestWeight",
                    }}
                    error={formState.errors.dateTaken}
                  />
                </Stack>
                <CheckboxField
                  name="fur"
                  label="Fur"
                  options={[
                    { label: "Black", value: "Black" },
                    { label: "White", value: "White" },
                    { label: "Gray", value: "Gray" },
                    { label: "Cream", value: "Cream" },
                    { label: "Brown", value: "Brown" },
                    { label: "Hairless", value: "Hairless" },
                  ]}
                  error={formState.errors.fur}
                />
              </Stack>
              <ButtonGroup flexDirection="column" gap={3}>
                <Button type="submit" isLoading={loading}>
                  Submit Form
                </Button>
                <Button variant="link" onClick={handleCancel}>
                  Cancel
                </Button>
              </ButtonGroup>
            </Stack>
          );
        }}
      </Form>
    </PageSection>
  );
};

export { AddNewPet };
