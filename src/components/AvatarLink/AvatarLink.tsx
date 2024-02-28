import theme from "@/app/theme";
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

const AvatarLink = ({ href, icon, text }: AvatarLinkProps) => {
  return (
    <Link href={href}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          name={!icon ? text : undefined}
          size="lg"
          bg="transparrent"
          color={theme.colors.link}
          borderColor={theme.colors.link}
          border="1px solid"
          icon={icon}
        />
        <Text fontSize="lg">{text}</Text>
      </Box>
    </Link>
  );
};

const SkeletonAvatarLink = () => {
  return (
    <Stack spacing={2.5}>
      <SkeletonCircle size="20" alignSelf="center" />
      <SkeletonText noOfLines={1} skeletonHeight="4" />
    </Stack>
  );
};

export { AvatarLink, SkeletonAvatarLink };
