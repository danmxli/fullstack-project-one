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

} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// API key
const API_KEY = "96b1322f-5ef9-4dfe-8835-cea13a034320";

export default function Safari({ refreshData }) {
    // maintain state
    const [safariQuery, setSafariQuery] = useState("");
    const [safariResults, setSafariResults] = useState([]);

    // movie added popup
    const addedToast = useToast()

    // react component
    return (
        <VStack spacing={6} paddigTop={4}>
            <Heading size="md"> Search for Movies</Heading>
        </VStack>


    )
}

