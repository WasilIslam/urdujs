// Import the Prettier library
import {format} from "prettier/standalone";
import * as babel from "prettier/parser-babel"
// Function to prettify the JavaScript code
async function prettifyJS(code) {
  try {
    // Use Prettier's format function to prettify the code
    const prettifiedCode = await format(code, {
      parser: "babel", // Specify the parser, e.g., 'babel', 'typescript', 'json', etc.
      plugins: [babel],
      semi: true, // Add semicolons at the end of statements
      singleQuote: true, // Use single quotes instead of double quotes for strings
      // Add more formatting options as needed
    });

    return prettifiedCode;
  } catch (error) {
    console.error("Error while prettifying code:", error);
    return code; // Return the original code if an error occurs
  }
}

export default prettifyJS