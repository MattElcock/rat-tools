"use client";

import { useGetPetById } from "@/api/getPetById";
import { CheckboxField } from "@/components/CheckboxField";
import { Form } from "@/components/Form";
import { RadioField } from "@/components/RadioField";
import { TextField } from "@/components/TextField";
import { requiredErrorMessage } from "@/constants/copy";
import { PageSection } from "@/layouts/PageSection";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";

interface EditPetProfileProps {
  petId: string;
}

interface FieldValues {
  name: string;
  dateOfBirth: string;
  sex: string;
  fur: string[];
}

const schema = yup.object({
  name: yup.string().required(requiredErrorMessage),
  dateOfBirth: yup.string().required(requiredErrorMessage),
  sex: yup.string().required(requiredErrorMessage),
  fur: yup
    .array()
    .of(yup.string().required(requiredErrorMessage))
    .required(requiredErrorMessage),
});

const EditPetProfile = ({ petId }: EditPetProfileProps) => {
  const { data } = useGetPetById(petId);
  const router = useRouter();

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleCancel = () => {
    router.push(`/pets/${data.id}`);
  };

  return (
    <PageSection title="Edit Profile">
      <Form<FieldValues>
        onSubmit={handleSubmit}
        resolver={yupResolver(schema)}
        defaultValues={{
          name: data.name,
          dateOfBirth: new Date(data.dateOfBirth),
          sex: data.sex,
          fur: data.fur,
        }}
      >
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
                <Button colorScheme="teal" type="submit">
                  Submit Form
                </Button>
                <Button
                  colorScheme="teal"
                  variant="link"
                  onClick={handleCancel}
                >
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

export { EditPetProfile };
