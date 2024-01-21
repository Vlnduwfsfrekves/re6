import React from "react";
import PageBoard from './components/PageBoard';
import events from '../src/components/json/events.json';
function App() {
  return (
    <PageBoard events={events}/>
  );
}
export default App;