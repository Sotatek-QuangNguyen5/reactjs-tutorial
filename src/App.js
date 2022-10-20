import { useState } from "react";
import Avatar from "./Avatar";
import Content from "./Content";
import CountTime from "./CountTime";
import Timer from "./Timer";
import ComponentMemo from "./ComponentMemo";


function App() {

  const [toggle, setToggle] = useState(false)
  const [timer, setTimer] = useState(false)
  const [avatar, setAvatar] = useState(false)
  const [countTime, setCountTime] = useState(false)
  const [memo, setMemo] = useState(false)

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
		<button
            onClick={() => setCountTime(!countTime)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          CountTime
        </button>
		<button
            onClick={() => setMemo(!memo)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Memo
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
		{
        	countTime && <CountTime
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
		{
        	memo && <ComponentMemo
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
