import {
  Avatar,
  Box,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

interface AvatarLinkProps {
  href: string;
  text: string;
  icon?: ReactElement;
}

const AvatarLink = ({ href, text, icon }: AvatarLinkProps) => {
  return (
    <Link href={href}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar icon={icon} size="xl" />
        <Text fontSize="2xl">{text}</Text>
      </Box>
    </Link>
  );
};

const SkeletonAvatarLink = () => {
  return (
    <Stack spacing={2.5}>
      <SkeletonCircle size="24" />
      <SkeletonText noOfLines={1} skeletonHeight="5" />
    </Stack>
  );
};

export { AvatarLink, SkeletonAvatarLink };
