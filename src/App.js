import { useState } from "react";
import Avatar from "./Avatar";
import Content from "./Content";
import CountTime from "./CountTime";
import Timer from "./Timer";
import ComponentMemo from "./ComponentMemo";
import Calculator from "./Calculator";
import Reducer from "./Reducer";
import TodoList from "./todo";
import Context from "./Context";
import "./App.css"
import Imperative from "./Imperative";
import Page from "./pages/Page";


function App() {

  const [toggle, setToggle] = useState(false)
  const [timer, setTimer] = useState(false)
  const [avatar, setAvatar] = useState(false)
  const [countTime, setCountTime] = useState(false)
  const [memo, setMemo] = useState(false)
  const [calculator, setCalculator] = useState(false)
  const [reducer, setReducer] = useState(false)
  const [todo, setTodo] = useState(false)
  const [paragraph, setParagraph] = useState(false)
  const [video, setVideo] = useState(false)
  const [router, setRouter] = useState(false)

//   const context = useContext(ThemeContext)
//   console.log('app file', context)

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
		<button
            onClick={() => setCalculator(!calculator)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Calculator
        </button>
		<button
            onClick={() => setReducer(!reducer)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Reducer
        </button>
		<button
            onClick={() => setTodo(!todo)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          TodoList
        </button>
		<button
            onClick={() => setParagraph(!paragraph)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Paragraph
        </button>
		<button
            onClick={() => setVideo(!video)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Video
        </button>
		<button
            onClick={() => setRouter(!router)}
            style={{

				marginLeft: 50,
				marginTop: 20
            }}
        >
          Router
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
		{
        	calculator && <Calculator
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
		{
        	reducer && <Reducer
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
		{
        	todo && <TodoList
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
		{
        	paragraph && <Context
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
		{
        	video && <Imperative
						styles={{

							marginLeft: 80,
							marginTop: 40
						}}
                    />
        }
		{
        	router && <Page
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
