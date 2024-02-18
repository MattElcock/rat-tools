"use client";

import { useGetPetById } from "@/api/root/getPetById";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { startCase } from "lodash";
import NextLink from "next/link";
import { useParams, usePathname } from "next/navigation";
import { IoArrowForwardOutline } from "react-icons/io5";

const buildLink = (path: string[], breadcrumbIndex: number) =>
  `/${path.slice(0, breadcrumbIndex + 1).join("/")}`;

const formatBreadcrumb = (text: string) => startCase(text.replace("-", " "));

interface PetNameBreadcrumbProps {
  link?: string;
}

const PetNameBreadcrumb = ({ link }: PetNameBreadcrumbProps) => {
  const { petId } = useParams();
  const { data } = useGetPetById(petId as string);

  if (link) {
    return (
      <BreadcrumbLink href={link} as={NextLink}>
        {formatBreadcrumb(data.name)}
      </BreadcrumbLink>
    );
  }

  return <>{formatBreadcrumb(data.name)}</>;
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathAsArray = pathname.split("/").filter(Boolean);

  const buildBreadcrumbItem = (path: string[], breadcrumbIndex: number) => {
    if (pathAsArray[breadcrumbIndex - 1] === "pets") {
      return (
        <PetNameBreadcrumb
          link={
            pathAsArray.length - 1 === breadcrumbIndex
              ? undefined
              : buildLink(pathAsArray, breadcrumbIndex)
          }
        />
      );
    }

    if (pathAsArray.length - 1 === breadcrumbIndex) {
      return <>{formatBreadcrumb(path[breadcrumbIndex])}</>;
    }

    return (
      <BreadcrumbLink
        href={buildLink(pathAsArray, breadcrumbIndex)}
        as={NextLink}
      >
        {formatBreadcrumb(path[breadcrumbIndex])}
      </BreadcrumbLink>
    );
  };

  return (
    <Box fontSize="sm" display="flex" gap={2}>
      <Text color="GrayText" fontWeight={600}>
        You are here:
      </Text>
      <Breadcrumb spacing={1} separator={<IoArrowForwardOutline />}>
        {pathAsArray
          .map((item, i) => (
            <BreadcrumbItem key={item}>
              {buildBreadcrumbItem(pathAsArray, i)}
            </BreadcrumbItem>
          ))
          .slice(-3)}
      </Breadcrumb>
    </Box>
  );
};

export { Breadcrumbs };
