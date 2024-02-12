import { useGetWeightsByPetId } from "@/api/root/getWeightsByPetId";
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
import React from "react";
import { Suspense } from "react";

interface DataTableProps {
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

const DataTable = ({ petId, dateRange, currentPeriod }: DataTableProps) => {
  const { data } = useGetWeightsByPetId(petId, dateRange.start, dateRange.end);

  const getDayFormat = () => {
    switch (currentPeriod) {
      case DataPeriod.Week: {
        return "dddd";
      }
      case DataPeriod.Month: {
        return "dddd, Do";
      }
      case DataPeriod.Custom: {
        return "dddd, Do MMMM";
      }
    }
  };

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
            data.weights.map((weight) => (
              <Tr key={weight.dateTaken}>
                <RowHeading>
                  {moment(weight.dateTaken).format(getDayFormat())}
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

const WrappedDataTable = (props: DataTableProps) => {
  return (
    <Suspense
      fallback={
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
      }
    >
      <DataTable {...props} />
    </Suspense>
  );
};

export { WrappedDataTable as DataTable };
