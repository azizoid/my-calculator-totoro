import React from 'react';
import totoro from './img/totoro.png'
import './App.css';
import Screen from './components/screen/screen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "/", "*"],
      display: "",
      query: "",
      result: ""
    };
  }

  numberFunction = (value) => {
    this.setState({ display: value });
    let input = this.state.query += value;
    this.setState({ query: input});
    console.log(input);
  };

  actionFunction = (value => {
    this.setState({ display: value });
    let input = this.state.query += value;
    this.setState({ query: input});
  })

  equalsFunction = () => {
    let query = this.state.query;
    let answer = eval(query);
    this.setState({ result: answer });
    this.setState({ display: answer});
    this.setState({ query: answer})
  };

  clearScreen = () => {
    this.setState({ display: ""});
    this.setState({ query: ""});
  };

  handleButtonClicked = (value) => {
    if (value === "C") {
      this.clearScreen();
    } else {
      if (value === "=") {
        this.equalsFunction();
      } else {
        if (value === "+" || value === "-" || value === "*" || value === "/" ) {
          this.actionFunction(value);
        } else {
          this.numberFunction(value);
          }
        }
      }
    }
        

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body className="App-Body">
          <div className="Header">
          </div>
          <h3>My Calculator</h3>
          <h1>TOTORO</h1>
          <div className="Totoro">
            <img src={totoro} alt="Totoro" height="600" className="Tototo-Img"/>

            <div className="Calculator">
              <div className="Display-Screen">
              <Screen key={this.state.display} display={this.state.display} handleButtonClicked={this.handleButtonClicked}/>
              </div>
              
              <div className="Button-Pad">
                <div className="Buttons">
                  {this.state.buttons.map(item => (
                    <button
                      key={item}
                      onClick={() =>
                        this.handleButtonClicked(item)
                      }
                      >
                        {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );


  }
}

export default App;
