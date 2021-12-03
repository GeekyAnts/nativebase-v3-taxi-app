import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Badge,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "native-base";
import React, { useRef } from "react";

function Otp({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const secondInput = useRef<HTMLDivElement>(null);
  const thirdInput = useRef<HTMLDivElement>();
  const fourthInput = useRef<HTMLDivElement>();

  return (
    <VStack p="4" bg="white" flex="1" space="4" safeArea>
      <Box>
        <Text fontSize="md" fontWeight="bold">
          Enter the 4 digit code sent to your mobile number
          {/* {Number should be present dynamically} */}
        </Text>
        <HStack my="4" space="3">
          <Input
            variant="underlined"
            width="10"
            h="10"
            bg="gray.100"
            maxLength={1}
            textAlign="center"
            onChange={() => {
              secondInput.current?.focus();
            }}
            autoFocus
          />
          <Input
            variant="underlined"
            width="10"
            h="10"
            bg="gray.100"
            maxLength={1}
            textAlign="center"
            ref={secondInput}
            onChange={() => {
              thirdInput.current?.focus();
            }}
          />
          <Input
            variant="underlined"
            width="10"
            h="10"
            bg="gray.100"
            maxLength={1}
            textAlign="center"
            ref={thirdInput}
            onChange={() => {
              fourthInput.current?.focus();
            }}
          />
          <Input
            variant="underlined"
            width="10"
            h="10"
            bg="gray.100"
            maxLength={1}
            textAlign="center"
            ref={fourthInput}
            onChange={() => navigation.navigate("home")}
          />
        </HStack>
        <HStack>
          <Badge rounded="xl">I haven't received a code (0:07)</Badge>
        </HStack>
      </Box>
      <Box
        flexDir="row"
        justifyContent="space-between"
        //   mt="auto"
        mt="auto"
        mb="6"
      >
        <IconButton
          icon={<ArrowBackIcon />}
          bg="gray.200"
          _pressed={{ bg: "gray.300" }}
          rounded="full"
          onPress={() => navigation.navigate("Login")}
        ></IconButton>
        <Button
          // bg="gray.800"
          // _pressed={{ bg: "gray.900" }}
          bg="black"
          _pressed={{
            bg: "trueGray.800",
          }}
          rounded="full"
          px="4"
          _text={{ fontSize: "14" }}
          endIcon={<ArrowForwardIcon size="xs" />}
          onPress={() => navigation.navigate("home")}
        >
          Next
        </Button>
      </Box>
    </VStack>
  );
}

export default Otp;
