import React from "react";
import type {} from "@react-navigation/native-stack";
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
} from "native-base";

function Login() {
  return (
    <VStack p="4" bg="white" flex="1" space="4">
      <Text fontSize="16" fontWeight="semibold">
        Enter your mobile number
      </Text>
      <HStack space="2">
        <Select
          minWidth="100"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="India" value="India" />
          <Select.Item label="US" value="US" />
        </Select>
        <InputGroup
          w={{
            base: "70%",
            md: "285",
          }}
          mt="1"
        >
          <InputLeftAddon children={"+91"} />
          <Input
            w={{
              base: "80%",
              md: "100%",
            }}
            placeholder="10 Digit number"
          />
        </InputGroup>

        {/* <Input flex="1" /> */}
      </HStack>
      <Text fontSize="xs" color="muted.400">
        If you continue, you may receive an SMS for verification. Message and
        data rates may apply
      </Text>
    </VStack>
  );
}

export default Login;
