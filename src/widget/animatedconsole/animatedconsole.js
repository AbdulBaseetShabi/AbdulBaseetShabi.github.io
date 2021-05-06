import React from "react";
import "./animatedconsole.css";

class AnimatedConsole extends React.Component {
  constructor(props) {
    super(props);
    this.parsedText = null;
    this.state = {
      stop: 0,
      index: 0,
    };
    this.textInterval = null;
    this.waitPeriod = null;
    this.prefixText = this.props.prefixText;
    this.suffixText = this.props.suffixText;
    this.stopInterval = false;
    this.alreadyCalled = false;
  }

  pauseInterval() {
    if (!this.alreadyCalled) {
      this.alreadyCalled = true;
      this.stopInterval = true;
      this.waitPeriod = setTimeout(() => {
        this.stopInterval = false;
      }, this.props.textChangeInterval);
    }
  }

  parseText(text) {
    let text_array = text;
    if (!Array.isArray(text)) {
      text_array = [].push(text);
    }

    let response = [];

    for (const current_text of text_array) {
      let index_array = [];
      let previous_value;

      for (let i = 0; i < current_text.length; i++) {
        previous_value = index_array[index_array.length - 1];

        if (i === current_text.length - 1) {
          index_array[index_array.length - 1].end = i + 1;
        } else if (current_text[i] === "$") {
          if (index_array.length === 0) {
            index_array.push({ start: i, end: -1, is_special: true });
          } else {
            index_array[index_array.length - 1].end = i;
            index_array.push({
              start: i,
              end: -1,
              is_special: !previous_value.is_special,
            });
          }
        } else if (i === 0) {
          index_array.push({ start: i, end: -1, is_special: false });
        }
      }

      response.push({
        text: current_text.replaceAll("$", " ").trim(),
        parsedIndex: JSON.parse(JSON.stringify(index_array)),
      });
    }

    return response;
  }

  componentDidMount() {
    this.parsedText = this.parseText(this.props.texts);
    this.textInterval = setInterval(() => {
      if (
        this.state.stop === this.parsedText[this.state.index].text.length - 1 &&
        !this.alreadyCalled
      ) {
        this.pauseInterval();
      }

      if (!this.stopInterval) {
        this.alreadyCalled = false;
        this.setState((prevState, prevProps) => {
          let end_of_text =
            prevState.stop === this.parsedText[prevState.index].text.length;
          if (!end_of_text) {
            return {
              stop: prevState.stop + 1,
            };
          } else {
            return {
              stop: 0,
              index: (prevState.index + 1) % this.parsedText.length,
            };
          }
        });
      }
    }, this.props.typingSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.textInterval);
    clearTimeout(this.waitPeriod);
  }

  render() {
    let text = this.parseText(this.props.texts);

    let current_text = text[this.state.index];
    let display_text = current_text;
    let stop = this.state.stop;
    display_text.parsedIndex = display_text.parsedIndex.filter((index) => {
      return index.start <= stop;
    });
    display_text.parsedIndex[display_text.parsedIndex.length - 1].end =
      stop + 1;

    return (
      <div
        style={{
          width: "25%",
          height: "7rem",
          backgroundColor: "#272C45",
          margin: "0 auto",
          padding: "0.5rem",
          border: "5px inset black",
          userSelect: "none",
        }}
      >
        {text.map((data, index) => {
          if (index < this.state.index  ) {
            return (
              <div key={index} className="code-line">
                <label style={{fontSize: "bold"}}>{this.prefixText}</label>
                {data.parsedIndex.map((special_index, index) => {
                  return (
                    <label
                      key={index}
                      style={
                        special_index.is_special
                          ? this.props.specialCharaterStyle
                          : {}
                      }
                    >
                      {data.text.slice(
                        special_index.start,
                        special_index.end
                      )}
                    </label>
                  );
                })}
              </div>
            );
          } else if (this.state.index === index) {
            return (
              <div className="code-line" key={index}>
                <label style={{fontSize: "bold"}}>{this.prefixText}</label>
                {display_text.parsedIndex.map((special_index, index) => {
                  return (
                    <label
                      key={index}
                      style={
                        special_index.is_special
                          ? this.props.specialCharaterStyle
                          : {}
                      }
                    >
                      {display_text.text.slice(
                        special_index.start,
                        special_index.end
                      )}
                    </label>
                  );
                })}
                <label id="suffix-text">{this.suffixText}</label>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default AnimatedConsole;
