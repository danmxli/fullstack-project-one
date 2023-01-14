import './App.css';
import React from 'react';
/*
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
*/
import Safari from './components/Safari';


import { useState, useEffect } from 'react'
import {
  ChakraProvider,
  Center,
  Heading,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'

function App() {
  // local states from BACKEND
  const [mflix, setMflix] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  // define fetch data function
  const fetchData = () => {
    setRefreshData(!refreshData)
  }

  useEffect(() => {
    // useEffect code here
    fetch('http://localhost:3000/api/v1/mflix')
      .then(response => response.json())
      .then(data => {
        setMflix(data);
      })
  }, [refreshData]);



  // print test
  console.log(mflix);

  return (
    <ChakraProvider>
      <Center bg="#2c3253" color="white" padding={5}>
        <VStack spacing={7}>
          <Tabs variant="line" colorScheme="orange">
            <Center>
              <TabList>
                <Tab>
                  <Heading>Safari</Heading>
                </Tab>
                <Tab>
                  <Heading>Archive</Heading>
                </Tab>
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Safari refreshData={fetchData}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
