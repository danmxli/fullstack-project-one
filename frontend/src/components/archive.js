import {
    Center,
    Text,
    Heading,
    VStack,
    Button,
    Input,
    HStack,
    SimpleGrid,
    Image,
    Badge,
    useToast,
    Box,
    Container,
    ChakraBaseProvider,
    ChakraProvider,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    StackDivider,

} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import React from "react";

export default function Archive({ mflixData, refreshData }) {
    return (
        <ChakraProvider>

            <VStack spacing={2} paddingTop={2}>
                <Heading size="lg" color="blue.300">
                    Your Personal Collection. Here.
                </Heading>

                <HStack spacing={2}>
                    <VStack width="880px" borderWidth="1px" borderRadius="lg" overflow="hidden" spacing={10}>
                        <Heading color="gray.500">
                            See Below.
                        </Heading>
                    </VStack>

                </HStack>

                <Card bg="gray.700" width="600px">
                    <CardHeader>
                        <Heading size='lg'>Organize your Movies:</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='2' color="gray.300">
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    For Later
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    Busy now? Watch later.
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    For Now
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    Sit down with a bag of popcorn and enjoy.
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Favorite
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    Truly unforgettable, will always get you in that mood.
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    bg="gray.400"
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '600px' }}
                        src='https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60'
                        alt='Computer Keyboard'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>About the Creator</Heading>

                            <Text py='2'>
                                Hello there.
                                I'm an engineering student with an interest in fullstack development.
                                My objective is to use technology to optimize everyday tasks in life.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                Support me!
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>

                

            </VStack>




        </ChakraProvider>


    )
}