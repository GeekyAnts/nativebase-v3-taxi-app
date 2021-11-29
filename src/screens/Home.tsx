import React from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  ChevronDownIcon,
  ChevronRightIcon,
  Circle,
  Divider,
  HamburgerIcon,
  Heading,
  HStack,
  IconButton,
  Pressable,
  Text,
  VStack,
} from "native-base";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

function Home() {
  return (
    <VStack p="4" space="4" bg="white" flex="1">
      <HStack>
        <Pressable>
          <HamburgerIcon />
        </Pressable>
      </HStack>
      <Box
        w="100%"
        bg="slateGreen.100"
        flexDir="row"
        justifyContent="space-between"
        rounded="lg"
        p="4"
      >
        <Text color="white" fontSize="lg">
          20% off on first 5 rides
        </Text>
      </Box>
      <HStack space="6" mt="2">
        <Box
          flex="1"
          bg="trueGray.200"
          rounded="lg"
          h="100"
          p="2"
          position="relative"
        >
          <Badge
            rounded="full"
            bg="green.600"
            _text={{ color: "white", fontSize: "sm" }}
            mx="auto"
            position="absolute"
            top="-10"
            left="30%"
            right="30%"
          >
            20% off
          </Badge>

          <Text fontWeight="semibold" fontSize="md" mt="auto">
            Ride
          </Text>
        </Box>
        <Box flex="1" bg="trueGray.200" rounded="lg" h="100" p="2">
          <Text fontWeight="semibold" fontSize="md" mt="auto">
            Intercity
          </Text>
        </Box>
      </HStack>
      <HStack bg="trueGray.200" p="2" alignItems="center">
        <Text fontWeight="semibold" fontSize="xl">
          Where to?
        </Text>
        <Divider
          thickness="2"
          bg="trueGray.300"
          orientation="vertical"
          ml="auto"
          mr="4"
        />
        <Button
          startIcon={<AntDesign name="clockcircle" size={20} color="black" />}
          endIcon={<ChevronDownIcon size="4" color="black" />}
          _text={{ color: "black" }}
          bg="white"
          rounded="full"
        >
          Now
        </Button>
      </HStack>
      <HStack mt="4" space="2" alignItems="center">
        <Circle bg="trueGray.200" p="2" mr="3">
          <FontAwesome name="star" size={18} color="black" />
        </Circle>
        <Text fontWeight="semibold" fontSize="lg">
          Choose a saved place
        </Text>
        <IconButton
          ml="auto"
          icon={<ChevronRightIcon size="sm" color="gray.400" />}
        ></IconButton>
      </HStack>
      <Heading my="4" size="md">
        Around you
      </Heading>
      {/* show map here */}
    </VStack>
  );
}

export default Home;
