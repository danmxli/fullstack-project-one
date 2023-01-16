import React from 'react';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

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
import Archive from './components/archive';

function App() {
  // local states for safari tab
  const [mflixData, setMflixData] = useState([]);
  // when to get data again
  const [refreshData, setRefreshData] = useState(false);

  // define refresh data function
  const fetchData = () => {
    setRefreshData(!refreshData)
  }

  // get movie data from API endpoint into json format
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/mflix`)
      .then(response => response.json())
      .then(data => {
        setMflixData(data);
      })
  }, [refreshData]);

  // console.log(mflixData.mflix);
  return (
    <ChakraProvider>
      <Center bg="#303158" color="white" padding={5}>
        <VStack spacing={7}>
          <Tabs variant="line" colorScheme="yellow">
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
                <Safari refreshData={fetchData} />
              </TabPanel>
              <TabPanel>
                <Archive mflixData={mflixData} refreshData={fetchData}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
