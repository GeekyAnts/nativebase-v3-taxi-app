import React, { useState } from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Text,
  HStack,
  Input,
  VStack,
  Button,
  ArrowForwardIcon,
  IconButton,
  ArrowBackIcon,
  Image,
  ChevronDownIcon,
  Pressable,
  useDisclose,
  Actionsheet,
} from "native-base";

function Login({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const [country, setCountry] = useState("India");
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Box p="4" bg="white" flex="1" safeArea>
      <VStack space="4">
        <Text fontSize="16" fontWeight="semibold">
          Enter your mobile number
        </Text>
        <HStack space="2" alignItems="center">
          {/* <Select
            minWidth="100"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            onValueChange={(value) => setCountry(value)}
            h="39"
          >
            <Select.Item label="India" value="India"></Select.Item>
            <Select.Item label="US" value="US" />
          </Select> */}
          <Pressable
            height="34"
            bg="trueGray.100"
            flexDir="row"
            // alignItems="center"
            onPress={onOpen}
            p="1"
          >
            {country === "US" ? (
              <Image
                source={require("../../assets/us-flag-rect.png")}
                alt="indian flag"
                key="US"
                width="34"
                h="25"
                py="1"
                bg="white"
              />
            ) : (
              <Image
                source={require("../../assets/india-flag-rect.png")}
                alt="us flag"
                key="India"
                width="34"
                h="25"
                py="1"
                bg="white"
              />
            )}

            <ChevronDownIcon size="sm" color="gray.400" />
          </Pressable>
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              <Actionsheet.Item
                onPress={() => {
                  onClose();
                  setCountry("India");
                }}
              >
                <HStack space="4" alignItems="center">
                  <Image
                    source={require("../../assets/india-flag-rect.png")}
                    alt="indian flag"
                    width="34"
                    h="25"
                    py="1"
                    bg="white"
                  />
                  <Text fontSize="md">India</Text>
                </HStack>
              </Actionsheet.Item>
              <Actionsheet.Item
                onPress={() => {
                  onClose();
                  setCountry("US");
                }}
              >
                <HStack space="4" alignItems="center">
                  <Image
                    source={require("../../assets/us-flag-rect.png")}
                    alt="us flag"
                    width="34"
                    h="25"
                    py="1"
                    bg="white"
                  />
                  <Text fontSize="md">US</Text>
                </HStack>
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>

          {/* <InputGroup
            h="39"
            // w={{
            //   base: "70%",
            //   md: "285",
            // }}
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
          </InputGroup> */}
          <Input
            w={{
              base: "80%",
              md: "100%",
            }}
            placeholder="10 Digit number"
            keyboardType="numeric"
            maxLength={10}
            InputLeftElement={
              <Text px="1">{country === "US" ? "+1" : "+91"}</Text>
            }
            _focus={{
              borderColor: "black",
            }}
          />
          {/* <Input flex="1" /> */}
        </HStack>
        <Text fontSize="xs" color="muted.400">
          If you continue, you may receive an SMS for verification. Message and
          data rates may apply
        </Text>
      </VStack>
      <HStack mt="auto" mb="10" justifyContent="space-between">
        <IconButton
          icon={<ArrowBackIcon />}
          bg="gray.200"
          _pressed={{ bg: "gray.300" }}
          rounded="full"
          onPress={() => navigation.navigate("welcome")}
        ></IconButton>
        <Button
          bg="black"
          _pressed={{
            bg: "trueGray.700",
          }}
          // ml="auto"
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
      </HStack>
    </Box>
  );
}

export default Login;
