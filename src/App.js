import './App.css';

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
  // local states
  const [allMovies, setMovies] = useState([])
  const [updateData, setUpdate] = useState(false);

  return (
    <ChakraProvider>
      <Center bg="#2c3253" color="white" padding={5}>
        <VStack spacing={7}>
          <Tabs variant="line" colorScheme="orange">
            <Center>
              <TabList>
                <Tab>
                  <Heading>Search</Heading>
                </Tab>
                <Tab>
                  <Heading>Archive</Heading>
                </Tab>
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <p>Searched Content:</p>
              </TabPanel>
              <TabPanel>
                <p>Archived content:</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
