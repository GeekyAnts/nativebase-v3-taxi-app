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
import React, { useEffect, useRef, useState } from "react";

function Otp({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const firstInput = useRef<HTMLDivElement>(null);
  const secondInput = useRef<HTMLDivElement>(null);
  const thirdInput = useRef<HTMLDivElement>();
  const [filled, setFilled] = useState(true);
  const fourthInput = useRef<HTMLDivElement>();

  useEffect(() => {
    firstInput.current?.focus();
  }, []);

  return (
    <VStack
      p="4"
      bg="white"
      flex="1"
      space="4"
      safeArea
      maxW="768"
      w="100%"
      alignSelf="center"
    >
      <Box>
        <Text fontSize="md">
          Enter the 4 digit code sent to your mobile number
        </Text>
        <HStack my="4" space="3">
          <Input
            fontSize="sm"
            keyboardType="numeric"
            variant="underlined"
            width="10"
            h="10"
            bg="gray.100"
            maxLength={1}
            textAlign="center"
            onChange={() => {
              secondInput.current?.focus();
            }}
            ref={firstInput}
          />
          <Input
            fontSize="sm"
            keyboardType="numeric"
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
            fontSize="sm"
            keyboardType="numeric"
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
            fontSize="sm"
            keyboardType="numeric"
            variant="underlined"
            width="10"
            h="10"
            bg="gray.100"
            maxLength={1}
            textAlign="center"
            ref={fourthInput}
            onChange={() => {
              setFilled(false);
              navigation.navigate("home");
            }}
          />
        </HStack>
        <HStack my="2">
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
          icon={<ArrowBackIcon size="sm" />}
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
          _pressed={{ bg: "gray.400" }}
          rounded="full"
          onPress={() => navigation.navigate("Login")}
        ></IconButton>
        <Button
          // bg="gray.800"
          // _pressed={{ bg: "gray.900" }}
          colorScheme="trueGray"
          isDisabled={filled}
          bg="black"
          _pressed={{
            bg: "trueGray.700",
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
