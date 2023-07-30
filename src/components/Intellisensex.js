import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const wordsList = [
  'int',
  'float',
  'double',
  'char',
  'if',
  'else',
  'while',
  'for',
  'return',
  'void',
  // Add more words to the list as needed.
];

const CodeEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = monaco.editor.create(editorRef.current, {
      value: '',
      language: 'javascript', // Change this to your preferred language (e.g., 'java', 'python', etc.).
      theme: 'vs-dark', // You can choose other themes from the monaco library.
      automaticLayout: true,
    });

    // Register a completion item provider for IntelliSense.
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: () => {
        const suggestions = wordsList.map((word) => ({
          label: word,
          kind: monaco.languages.CompletionItemKind.Keyword,
        }));
        return { suggestions };
      },
    });
  }, []);

  return <div ref={editorRef} style={{ width: '100%', height: '500px' }} />;
};

export default CodeEditor;
