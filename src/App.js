import { useState } from "react";
import Avatar from "./Avatar";
import Content from "./Content";
import Timer from "./Timer";


function App() {

  const [toggle, setToggle] = useState(false)
  const [timer, setTimer] = useState(false)
  const [avatar, setAvatar] = useState(false)

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
		<button
            onClick={() => setTimer(!timer)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Timer
        </button>
		<button
            onClick={() => setAvatar(!avatar)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Avatar
        </button>
        {
          	toggle && <Content 
						styles={{

							marginLeft: 80,
							marginTop: 20
						}}
                    />
        }
		{
          	timer && <Timer
						styles={{

							marginLeft: 80,
							marginTop: 20
						}}
                    />
        }
		{
          	avatar && <Avatar
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
    </div>
  );
}

export default App;
