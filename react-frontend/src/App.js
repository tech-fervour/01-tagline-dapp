import { Drizzle } from '@drizzle/store'
import { DrizzleContext } from "@drizzle/react-plugin"
import drizzleOptions from "./drizzleOptions"
import DisplayTagline from './components/DisplayTagline'

const drizzle = new Drizzle(drizzleOptions)

function App() {
  return (
    <div className="App">
      <DrizzleContext.Provider drizzle={drizzle}>
        <DisplayTagline />
      </DrizzleContext.Provider>
    </div>
  );
}

export default App;
