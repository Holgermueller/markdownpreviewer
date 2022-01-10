import { useState } from "react";
import "./App.css";
import { marked } from "marked";

export default function App() {
  const [mrkdwn, setValue] = useState(
    `
# Heading

## Subheading

- list item 1
- list item 2
- list item 3

> Block quote

[Link to Google](https://www.google.com/)

**Bold text**

### Some code:

\`\`\`

const handleChange = (e) => {
  e.preventDefault();
  setValue(e.target.value);
};

\`\`\`


    `
  );

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

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
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col">
            <div className="preview-label">Preview</div>
            <div className="preview-area">
              <div
                id="preview"
                className="preview-text"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(mrkdwn),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
