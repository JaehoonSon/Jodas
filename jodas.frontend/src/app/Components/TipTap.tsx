"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Content } from "next/font/google";
import "../styles/editorstyles.scss";
import { useState } from "react";

const Tiptap = () => {
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
    ],
    content: `
    <p><span>This has a &lt;span&gt; tag without a style attribute, so it’s thrown away.</span></p>
    <p><span style="">But this one is wrapped in a &lt;span&gt; tag with an inline style attribute, so it’s kept - even if it’s empty for now.</span></p>
  `,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getHTML();

      // send the content to an API here
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
