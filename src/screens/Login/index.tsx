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
  Menu,
  FormControl,
} from "native-base";

const UsFlag = require("../../../assets/us-flag-rect.png");
const IndiaFlag = require("../../../assets/india-flag.png");

function Login({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const [country, setCountry] = useState("India");
  const [number, setNumber] = useState("");
  const [iserror, setIserror] = useState(false);

  let regex = /^[0-9]{10}$/;

  return (
    <Box
      p="4"
      bg="white"
      flex="1"
      safeArea
      maxW="768"
      w="100%"
      alignSelf="center"
    >
      <VStack space="4">
        <Text fontSize="md">Enter your mobile number</Text>
        <HStack space="3" alignItems="center">
          <Menu
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  height="37"
                  width="77"
                  bg="trueGray.100"
                  alignItems="center"
                  justifyContent="center"
                  py="1"
                  pl="2"
                  pr="1"
                  accessibilityLabel="More options menu"
                  flexDir="row"
                  {...triggerProps}
                  alignSelf="flex-start"
                >
                  {country === "US" ? (
                    <Image
                      source={UsFlag}
                      alt="US flag"
                      key="US"
                      width="33"
                      h="21"
                      bg="white"
                      mr="1"
                    />
                  ) : (
                    <Image
                      source={IndiaFlag}
                      alt="indian flag"
                      key="India"
                      width="30"
                      h="21"
                      bg="white"
                      mr="1"
                    />
                  )}

                  <ChevronDownIcon size="sm" color="gray.400" />
                </Pressable>
              );
            }}
          >
            <Menu.Item
              onPress={() => {
                setCountry("India");
              }}
              key="India"
            >
              <HStack space="4" alignItems="center">
                <Image
                  source={IndiaFlag}
                  alt="indian flag"
                  width="33"
                  h="21"
                  p="1"
                  bg="white"
                />
                <Text fontSize="md">India</Text>
              </HStack>
            </Menu.Item>
            <Menu.Item
              onPress={() => {
                setCountry("US");
              }}
              key="US"
            >
              <HStack space="4" alignItems="center">
                <Image
                  source={UsFlag}
                  alt="us flag"
                  width="33"
                  h="21"
                  p="1"
                  bg="white"
                />
                <Text fontSize="md">US</Text>
              </HStack>
            </Menu.Item>
          </Menu>
          <FormControl flex="1" isInvalid={iserror}>
            <Input
              // flex="1"
              placeholder="10 Digit number"
              keyboardType="numeric"
              maxLength={10}
              InputLeftElement={
                <Text px="1">{country === "US" ? "+1" : "+91"}</Text>
              }
              _focus={{
                borderColor: "black",
              }}
              fontSize="sm"
              h="37"
              _web={{ overflowY: "hidden" }}
              value={number}
              onChangeText={(text) => {
                setNumber(text);
                if (text.match(regex)) setIserror(false);
              }}
            />
            <FormControl.ErrorMessage>
              Enter valid mobile number
            </FormControl.ErrorMessage>
          </FormControl>
        </HStack>
        <Text fontSize="xs" color="muted.500">
          If you continue, you may receive an SMS for verification. Message and
          data rates may apply
        </Text>
      </VStack>
      <HStack mt="auto" mb="10" justifyContent="space-between">
        <IconButton
          icon={<ArrowBackIcon size="sm" />}
          bg="gray.200"
          colorScheme="gray"
          _hover={{ bg: "gray.300" }}
          _pressed={{ bg: "gray.400" }}
          rounded="full"
          onPress={() => navigation.navigate("welcome")}
        />
        <Button
          bg="black"
          colorScheme="trueGray"
          _pressed={{
            bg: "trueGray.700",
          }}
          size="md"
          rounded="full"
          px="4"
          _text={{ fontSize: "16" }}
          endIcon={<ArrowForwardIcon size="sm" />}
          onPress={() => {
            if (number.match(regex)) {
              setNumber("");
              navigation.navigate("OTP");
            } else setIserror(true);
          }}
          alignItems="center"
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
}

export default Login;
