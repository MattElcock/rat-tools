"use client";

import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Actions = () => {
  const path = usePathname();

  return (
    <Box display="flex" gap={3}>
      <Link as={NextLink} href={`${path}/edit`} color="teal.500">
        Edit Profile
      </Link>
      <Link as={NextLink} href={`${path}/share`} color="teal.500">
        Share Profile
      </Link>
    </Box>
  );
};

export { Actions };
