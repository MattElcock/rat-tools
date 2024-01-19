import { CheckboxField } from "@/components/CheckboxField";
import { RadioField } from "@/components/RadioField";
import { TextField } from "@/components/TextField";
import { PageSection } from "@/layouts/PageSection";
import { Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";

const AddNewPet = () => {
  return (
    <PageSection title="Add a New Pet">
      <form>
        <Stack spacing={7}>
          <Stack spacing={5}>
            <TextField label="Name" />
            <TextField
              label="Date of Birth"
              helperText="If you aren't sure, enter a rough estimate"
              inputProps={{ type: "date" }}
            />
            <RadioField
              label="Sex"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
            />
            <Stack>
              <Text fontWeight={600} id="latest-weight">
                Latest Weight
              </Text>
              <Text fontSize="small">
                It is important to regularly weigh your pet as it helps you
                recognize sickness sooner.
              </Text>
              <TextField
                label="Reading"
                labelProps={{ fontWeight: 400 }}
                inputProps={{
                  "aria-describedby": "latest-weight",
                }}
                rightAddon="grams"
              />
              <TextField
                label="Date Taken"
                labelProps={{ fontWeight: 400 }}
                inputProps={{
                  type: "date",
                  "aria-describedby": "latest-weight",
                }}
              />
            </Stack>
            <CheckboxField
              label="Fur"
              options={[
                { label: "Black", value: "Black" },
                { label: "White", value: "White" },
                { label: "Gray", value: "Gray" },
                { label: "Cream", value: "Cream" },
                { label: "Brown", value: "Brown" },
              ]}
              mutuallyExclusiveOptions={[
                { label: "Hairless", value: "Hairless" },
              ]}
            />
          </Stack>
          <ButtonGroup flexDirection="column" gap={3}>
            <Button colorScheme="teal">Submit Form</Button>
            <Button colorScheme="teal" variant="link">
              Cancel
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </PageSection>
  );
};

export { AddNewPet };
