// Syntax highlighting styles
const styles = {
  keyword: {
    color: "blue",
    fontWeight: "bold",
  },
  // Add more styles for different syntax elements (e.g., strings, comments, etc.)
};
const highlightCode = (code) => {
    const keywords = ["function", "if", "else", "while", "for", "return"];
    const keywordRegex = new RegExp("\\b(" + keywords.join("|") + ")\\b", "g");
  
    return code.replace(keywordRegex, (match) => `<span style="${styles.keyword}">${match}</span>`);
  };
  
  export default highlightCode;
  