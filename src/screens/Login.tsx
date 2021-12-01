import React, { useState } from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Text,
  HStack,
  Select,
  CheckIcon,
  Input,
  InputLeftAddon,
  InputGroup,
  VStack,
  Button,
  ArrowForwardIcon,
} from "native-base";

function Login({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const [country, setCountry] = useState("India");
  return (
    <Box p="4" bg="white" flex="1">
      <VStack space="4">
        <Text fontSize="16" fontWeight="semibold">
          Enter your mobile number
        </Text>
        <HStack space="2">
          <Select
            minWidth="100"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            onValueChange={(value) => setCountry(value)}
            h="39"
          >
            <Select.Item label="India" value="India" />
            <Select.Item label="US" value="US" />
          </Select>
          <InputGroup
            h="39"
            w={{
              base: "70%",
              md: "285",
            }}
            color="gray.600"
          >
            <InputLeftAddon children={country === "US" ? "+1" : "+91"} />
            <Input
              w={{
                base: "80%",
                md: "100%",
              }}
              placeholder="10 Digit number"
              keyboardType="numeric"
              maxLength={10}
            />
          </InputGroup>
          {/* <Input flex="1" /> */}
        </HStack>
        <Text fontSize="xs" color="muted.400">
          If you continue, you may receive an SMS for verification. Message and
          data rates may apply
        </Text>
      </VStack>
      <Box mt="auto" mb="10">
        <Button
          bg="gray.800"
          _pressed={{ bg: "gray.900" }}
          ml="auto"
          size="md"
          rounded="full"
          px="4"
          _text={{ fontSize: "16" }}
          endIcon={<ArrowForwardIcon size="sm" />}
          onPress={() => navigation.navigate("OTP")}
          alignItems="center"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
