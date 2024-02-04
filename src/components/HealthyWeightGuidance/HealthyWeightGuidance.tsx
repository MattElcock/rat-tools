import theme from "@/app/theme";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Text,
  IconButton,
  Stack,
  useDisclosure,
  Link,
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const HealthyWeightGuidance = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Card bg="gray.100">
      <CardHeader
        display="grid"
        gridTemplateColumns="1fr auto"
        gap={3}
        paddingBottom={isOpen ? 0 : 5}
        alignItems="center"
        role="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="weight-guidance"
      >
        <Heading size="sm" as="h6" fontWeight="normal">
          How do I know if my rat is a healthy weight?
        </Heading>
        {isOpen ? <IoChevronUp /> : <IoChevronDown />}
      </CardHeader>
      {isOpen && (
        <CardBody id="weight-guidance">
          <Stack>
            <Text fontWeight={500}>
              If you are concerned about your rats weight, speak to a vet.
            </Text>
            <Text>
              According to{" "}
              <Link
                isExternal
                href="https://www.bartelsbusackpethospital.com/articles/basic-rat-care"
              >
                Bartels Busack Pet Hospital&apos;s article on basic rat care
              </Link>
              , on average a female rat should weigh between 350g and 450g and a
              male rat between 450g and 650g.
            </Text>
            <Text>
              Keep in mind, each rat is different. Similar to humans, there are
              other factors to consider, such as their length and how much
              muscle and fat they have.
            </Text>
          </Stack>
        </CardBody>
      )}
    </Card>
  );
};

export { HealthyWeightGuidance };
