"use client";

import { useCreateWeight } from "@/api/root/createWeight";
import { Metric } from "@/app/api/graphql/schema/enums/Metric";
import { Form } from "@/components/Form";
import { TextField } from "@/components/TextField";
import { requiredErrorMessage } from "@/constants/copy";
import { PageSection } from "@/layouts/PageSection";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import * as yup from "yup";

interface AddNewWeightProps {
  petId: string;
}

interface FieldValues {
  reading: number;
  dateTaken: string;
}

const schema = yup.object({
  dateTaken: yup.string().required(requiredErrorMessage),
  reading: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required(requiredErrorMessage),
});

const AddNewWeight = ({ petId }: AddNewWeightProps) => {
  const router = useRouter();

  const { execute } = useCreateWeight({
    onSuccess: () => {
      router.push(`/pets/${petId}/weight-tracker`);
    },
  });

  const handleSubmit = (data: FieldValues) => {
    execute({
      petId,
      value: data.reading,
      dateTaken: data.dateTaken,
      metric: Metric.Grams,
    });
  };

  const handleCancel = () => {
    router.push(`/pets/${petId}/weight-tracker`);
  };

  return (
    <PageSection title="Add a Weight">
      <Form<FieldValues> onSubmit={handleSubmit} resolver={yupResolver(schema)}>
        {({ formState }) => {
          return (
            <Stack spacing={7}>
              <Stack spacing={5}>
                <TextField
                  name="reading"
                  label="Reading"
                  labelProps={{ fontWeight: 400 }}
                  inputProps={{
                    "aria-describedby": "latestWeight",
                    type: "number",
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
                    max: new Date().toISOString().split("T")[0],
                    "aria-describedby": "latestWeight",
                  }}
                  error={formState.errors.dateTaken}
                />
              </Stack>
              <ButtonGroup flexDirection="column" gap={3}>
                <Button type="submit">Submit Form</Button>
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

export { AddNewWeight };
