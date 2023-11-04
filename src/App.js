import "./styles.css";
import { useState } from "react";
import { marked } from "marked";
let targetvalue =
  "# Heading" +
  "\n" +
  "## Heading2" +
  "\n [*link here](google.com)" +
  "\n![](#)" +
  "\n`Yeah this code sucks!`" +
  "\n*   list here " +
  "\n *   list here" +
  "\n> yeah this is a blockquote" +
  "\n **Bold text here!**  ";
export default function App() {
  const [markdown, newMarkdown] = useState();
  const [outMarkdown, procMarkdown] = useState();

  const renderText = (event) => {
    newMarkdown(event.target.value);
    procMarkdown(marked.parse(event.target.value));
  };

  return (
    <div className="App height_100 bg_slate">
      <text>Editor</text>
      <textarea
        className="height_40"
        id="editor"
        defaultValue={targetvalue}
        onChange={renderText}
        value={markdown}
      />
      <text>preview</text>
      <textarea
        className="height_40"
        id="preview"
        defaultValue={marked.parse(targetvalue)}
        value={outMarkdown}
      />
    </div>
  );
}
