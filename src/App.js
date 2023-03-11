import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "🤩": "Star-Struck",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't find given input in the database";
    }
    if (userInput === "") {
      meaning = "No emoji selected";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter!!!!</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>{meaning}</h3>

      <h2>emoji we know</h2>
      <div className="center-container">
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem",
                cursor: "pointer",
                borderSizing: "boder-box"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <div className="footer">
        <h4>Done by : </h4>
        <a className="link" href="https://aspiredeveloper.netlify.app/">
          <span style={{ color: "#f43f5e" }}>Sahithi Konduri</span>
        </a>

        <ul>
          <li className="list-non-bullet list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/sahithi-konduri/"
            >
              Linkedin |
            </a>
          </li>
          <li className="list-non-bullet list-item-inline link">
            <a className="link" href="https://github.com/SahithiKonduri">
              Github |
            </a>
          </li>
          <li className="list-non-bullet list-item-inline link">
            <a className="link" href="https://twitter.com/Sahithi_Konduri">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
