import React from "react";
import { useState, useEffect } from 'react'

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

} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// API key
const API_KEY = "96b1322f-5ef9-4dfe-8835-cea13a034320";

export default function Safari({ refreshData }) {
    const [safariQuery, setSafariQuery] = useState("");
    const [safariResults, setSafariResults] = useState([]);

    const bookAddedToast = useToast();

    // get movie data from API endpoint into json object add to safariResults
    const clickSearch = () => {

        fetch(
            `http://localhost:3000/api/v1/mflix?title=${safariQuery}&key=${API_KEY}&maxResults=30`
        )
            .then((response) => response.json())
            .then((data) => { setSafariResults(data.mflix) });
    };

    // console log for test
    console.log(safariResults);
    /**
     * example: title is paris
     * http://localhost:3000/api/v1/mflix?title=Paris&key=96b1322f-5ef9-4dfe-8835-cea13a034320
     */

    const addedToast = useToast();

    // states: 1-dislike 2-neutral 3-like

    const addMflix = (book) => {
        const body = JSON.stringify(
            {
                mflix_id: book._id,
                m_title: book.title,
                m_rated: book.rated,
                m_plot: book.plot,
                m_state: 2,
            }
        );

        fetch(
            "http://localhost:3000/api/v1/mflix", {
            method: "POST",
            headers: {
                Accept: "application.json",
                "Content-Type": "application/json",
            },
            body: body
        })
            .then(response => response.json())
            .then(data => {
                refreshData()
            });
    };



    return (
        <VStack spacing={2} paddingTop={2}>

            <Heading size="lg" color="blue.300">
                Search for Movies
            </Heading>

            <HStack spacing={2}>
                <Input width="550px"
                    value={safariQuery}
                    onChange={(e) => setSafariQuery(e.target.value)}
                />
                <Button
                    colorScheme="purple"
                    size="md"
                    onClick={clickSearch}
                >
                    Safari Go
                </Button>
            </HStack>
            {safariResults.length == 0 && (
                <Center>
                    <h2>
                        Add to your Archive to Watch on the Go.
                    </h2>
                </Center>
            )}

            <SimpleGrid columns={3} spacing={1}>
                {
                    safariResults.map((book) => {
                        return (
                            <VStack maxWidth="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" spacing={2} key={book._id}>
                                <Image src={book.poster} width={230} height={365}></Image>
                                <Badge borderRadius="full" px="2" colorScheme="purple">
                                    {book.title}
                                </Badge>

                                <Center>
                                    <Button variant="ghost" size="sm" color="blue.300"
                                        onClick={addMflix(book)}>
                                        Add to Archive
                                    </Button>
                                </Center>

                                <text padding={2}>
                                    <strong>Rated:</strong> {book.rated}
                                </text>

                                <Text textAlign="center" padding={2} color="gray">
                                    {book.plot}
                                </Text>

                            </VStack>
                        );
                    })
                }
            </SimpleGrid>
        </VStack>



    );
}

