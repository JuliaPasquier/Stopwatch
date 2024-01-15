import Greetings from "./components/Greetings";
import StopWatch from "./components/StopWatch";


function App() {
  return (
    
      <div className=" bg-gray-300 w-full min-h-screen flex flex-col items-center justify-center">
        <Greetings />
        <StopWatch />
      </div>
  
    
  );
}

export default App;
