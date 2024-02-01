"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { upperFirst } from "lodash";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowForwardOutline } from "react-icons/io5";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathAsArray = pathname.split("/").filter(Boolean);

  return (
    <Box fontSize="sm" display="flex" gap={2}>
      <Text color="GrayText" fontWeight={600}>
        You are here:
      </Text>
      <Breadcrumb spacing={1} separator={<IoArrowForwardOutline />}>
        {pathAsArray.map((pathSegment, i) => {
          const link = pathAsArray.filter((_, j) => j <= i).join("/");
          return (
            <BreadcrumbItem key={i}>
              <BreadcrumbLink
                href={`/${link}`}
                as={NextLink}
                color="#669ee9"
                textDecoration="underline"
              >
                {upperFirst(pathSegment)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Box>
  );
};

export { Breadcrumbs };
