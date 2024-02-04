"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Content } from "next/font/google";
import "../styles/editorstyles.scss";
import { useEffect, useState } from "react";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Load content from local storage when the component mounts
    const savedContent = localStorage.getItem("content");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
        },
        orderedList: {
          keepAttributes: true,
          keepMarks: true,
        },
      }),

      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
      }),
    ],

    content: content,

    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base  focus:outline-none text-white",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      localStorage.setItem("content", html);

      // send the content to an API here
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
