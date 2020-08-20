import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichTextarea = ({ body, onChange }) => {
  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <Editor
      apiKey={process.env.REACT_APP_TINYMCE_KEY}
      initialValue={body}
      init={{
        height: 500,
        menubar: false,
        plugins: [],
        toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter'
          + ' alignright alignjustify | bullist numlist | removeformat',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default RichTextarea;
