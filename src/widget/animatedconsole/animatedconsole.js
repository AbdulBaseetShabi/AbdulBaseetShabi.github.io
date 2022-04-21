import React from "react";
import "./animatedconsole.css";

const CONSOLE_STYLE = {
  minHeight: "60vh",
  height: "75vh",
  width: "50%",
  lineHeight: "2rem",
  margin: "auto",
  padding: "0.5rem",
  userSelect: "none",
  textAlign: "center",
  backgroundColor: "black",
  boxShadow: "10px 9px 0px 0px #6a6767"
};

const BUTTONS = ["red", "yellow", "green"];

class AnimatedConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stop_index_with_text: 0,
      current_index_text_array: 0,
      stop_index_command: 0,
      command_done: false,
      all_command_done: false,
    };
    this.texts = this.props.texts;
    this.suffixText = this.props.suffixText;
    this.waitPeriod = null;
    this.textInterval = null;
    this.commandInterval = null;
    this.alreadyCalled = false;
  }

  pauseInterval() {
    this.waitPeriod = setTimeout(() => {}, this.props.textChangeInterval);
  }

  componentDidMount() {
    this.commandInterval = setInterval(() => {
      //set the command interval
      this.setState((prevState, prevProps) => {
        if (prevState.stop_index_command === this.props.command.length) {
          //once the command has stopped typing
          clearInterval(this.commandInterval); //clear it
          this.commandInterval = null;
          clearTimeout(this.waitPeriod);
          this.waitPeriod = null;
          this.textInterval = setInterval(() => {
            //satrt the text interval
            this.setState((prevState, prevProps) => {
              if (
                prevState.stop_index_with_text ===
                this.texts[prevState.current_index_text_array].length
              ) {
                //once the text is done
                if (
                  prevState.current_index_text_array ===
                  this.texts.length - 1
                ) {
                  //check if it is the last one
                  clearInterval(this.textInterval); //clear the time interval
                  this.textInterval = null;
                  return {
                    all_command_done: true,
                  };
                } else {
                  return {
                    stop_index_with_text: 0,
                    current_index_text_array:
                      (prevState.current_index_text_array + 1) %
                      this.texts.length,
                  };
                }
              }

              return {
                stop_index_with_text: prevState.stop_index_with_text + 1,
              };
            });
          }, this.props.typingSpeed);
          return {
            command_done: true,
          };
        }

        return {
          stop_index_command: prevState.stop_index_command + 1,
        };
      });
    }, this.props.commandTypingSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.textInterval);
    this.textInterval = null;
    clearInterval(this.commandInterval);
    this.commandInterval = null;
    clearTimeout(this.waitPeriod);
    this.waitPeriod = null;
  }

  render() {
    let current_index_text_array = this.state.current_index_text_array;
    let style = {
      ...CONSOLE_STYLE,
      ...{
        backgroundColor: this.props.backgroundColor ?? "transparent",
      },
    };

    return (
      <div style={style} className="enter-left">
        <div id="console-header">
          <div id="console-button-container">
            {BUTTONS.map((button, index) => {
              return (
                <div
                  className="circle"
                  key={index}
                  style={{ backgroundColor: button }}
                >
                </div>
              );
            })}
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "1.5rem",
              width: "100%",
              height: "30px",
            }}
          >
          </div>
        </div>
        <div id="console-data" style={this.props.typingStyle}>
          <div id="console-defaults">
            <label >
              {this.props.commandPrefix}
              {
                <label>
                  <label>
                    {this.props.command.substring(
                      0,
                      this.state.stop_index_command + 1
                    )}
                  </label>
                  {this.state.command_done ? null : (
                    <label
                      id="suffix-text"
                      style={{ fontSize: this.props.typingStyle.fontSize }}
                    >
                      {this.suffixText}
                    </label>
                  )}
                </label>
              }
            </label>
          </div>
          {this.state.command_done ? (
            <div id="cat-data">
              {this.texts.map((text, index) => {
                if (index < current_index_text_array) {
                  return (
                    <div className="code-line" key={index}>
                      <label key={index}>{text}</label>
                    </div>
                  );
                } else if (index === current_index_text_array) {
                  return (
                    <div className="code-line" key={index}>
                      <label key={index}>
                        {text.substring(0, this.state.stop_index_with_text + 1)}
                      </label>
                      <label
                        id="suffix-text"
                        style={{ fontSize: this.props.typingStyle.fontSize }}
                      >
                        {this.suffixText}
                      </label>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ) : null}
          {this.state.all_command_done ? <div><label>{this.props.commandPrefix} $ cat socials.txt</label><div>{this.props.children}</div></div> : null}
        </div>
      </div>
    );
  }
}

export default AnimatedConsole;
