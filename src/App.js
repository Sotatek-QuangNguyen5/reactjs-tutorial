import { useState } from "react";
import Content from "./Content";


function App() {

  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
        <button
            onClick={() => setToggle(!toggle)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Toggle
        </button>
        {
          toggle && <Content 
                      styles={{

                        marginLeft: 80,
						marginTop: 20
                      }}
                    />
        }
    </div>
  );
}

export default App;
