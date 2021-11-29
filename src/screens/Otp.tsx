import {
  ArrowBackIcon,
  Badge,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "native-base";
import React from "react";

function Otp() {
  return (
    <Box p="4">
      <Box>
        <Text fontSize="md" fontWeight="semibold">
          Enter the 4 digit code sent to you at 098862 53706
          {/* {Number should be present dynamically} */}
        </Text>
        <HStack my="4" space="3">
          <Input width="10" h="10" bg="gray.100" />
          <Input width="10" h="10" bg="gray.100" />
          <Input width="10" h="10" bg="gray.100" />
          <Input width="10" h="10" bg="gray.100" />
        </HStack>
        <HStack>
          <Badge rounded="xl">I haven't received a code (0:07)</Badge>
        </HStack>
      </Box>
      <Box
        flexDir="row"
        justifyContent="space-between"
        //   mt="auto"
        mt="400"
      >
        <IconButton
          icon={<ArrowBackIcon />}
          bg="gray.200"
          rounded="full"
        ></IconButton>
        <Button>Next</Button>
      </Box>
    </Box>
  );
}

export default Otp;
