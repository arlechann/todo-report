import { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { TodoContextProvider } from './contexts/TodoContext';
import { ConfigContextProvider } from './contexts/ConfigContext';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const App = () => {
  const [tabPage, setTabPage] = useState(0);

  return (
    <div className="App">
      <Header page={tabPage}>
        <Tabs value={tabPage} onChange={(_, page) => setTabPage(page)}>
          <Tab label="in progress" />
          <Tab label="done" />
          <Tab label="report" />
          <Tab label="config" />
        </Tabs>
      </Header>
      <ConfigContextProvider>
        <TodoContextProvider>
          <Main page={tabPage} />
        </TodoContextProvider>
      </ConfigContextProvider>
    </div>
  );
};

export default App;
