import { useGetWeightsByPetId } from "@/api/getWeightsByPetId";
import { DataPeriod, DateRange } from "@/components/PeriodFilter";
import {
  SkeletonText,
  Table,
  TableCellProps,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";

interface Props {
  petId: string;
  dateRange: DateRange;
  currentPeriod: DataPeriod;
}

const RowHeading = ({ children, ...rest }: TableCellProps) => {
  return (
    <Td scope="row" {...rest}>
      {children}
    </Td>
  );
};

const DataTable = ({ petId, dateRange, currentPeriod }: Props) => {
  const { data, isLoading } = useGetWeightsByPetId(
    petId,
    dateRange.start,
    dateRange.end
  );

  const dayFormat = currentPeriod === DataPeriod.Week ? "dddd" : "dddd, Do";

  if (isLoading) {
    return (
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th textTransform="capitalize">Day</Th>
              <Th textTransform="capitalize" isNumeric>
                Weight
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <RowHeading>
                <SkeletonText noOfLines={1} />
              </RowHeading>
              <Td isNumeric>
                <SkeletonText noOfLines={1} />
              </Td>
            </Tr>
            <Tr>
              <RowHeading>
                <SkeletonText noOfLines={1} />
              </RowHeading>
              <Td isNumeric>
                <SkeletonText noOfLines={1} />
              </Td>
            </Tr>
            <Tr>
              <RowHeading>
                <SkeletonText noOfLines={1} />
              </RowHeading>
              <Td isNumeric>
                <SkeletonText noOfLines={1} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th textTransform="capitalize">Day</Th>
            <Th textTransform="capitalize" isNumeric>
              Weight
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.weights.length > 0 &&
            data.weights.map((weight: any) => (
              <Tr key={weight.dateTaken}>
                <RowHeading>
                  {moment(weight.dateTaken).format(dayFormat)}
                </RowHeading>
                <Td isNumeric>{weight.value}g</Td>
              </Tr>
            ))}
          {data.weights.length === 0 && (
            <Tr>
              <Td colSpan={2}>No data</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export { DataTable };
