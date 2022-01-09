import React, { useState } from "react";
import "./App.css";
const marked = require("marked");

function App() {
  const [mrkdwn] = useState(
    `
    #Heading

    ##Subheading

    -list item 1
    -list item 2
    -list item 3

    >Block quote

    [Link to Google](https://www.google.com/)

    **Bold text**


    `
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-floating">Editor </div>

            <textarea
              type="text"
              id="editor"
              className="form-control-lg editor"
              value={mrkdwn}
              onChange={(e) => mrkdwn(e.target.value)}
            ></textarea>
          </div>

          <div className="col">
            <div className="preview-label">Preview</div>
            <div id="preview" className="preview-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
