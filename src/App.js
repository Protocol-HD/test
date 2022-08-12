import { useState } from "react";
import { contexts } from "./Contexts"
import Home from "./Home";

function App() {
    const [num, setNum] = useState(0);

    return (
        <contexts.Provider value={{ num, setNum }}>
            <Home />
        </contexts.Provider>
    );
}

export default App;
