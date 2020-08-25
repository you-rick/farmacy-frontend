import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import style from './RichTextarea.scss';

const RichTextarea = ({ body, height, onChange }) => {
  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <Editor
      apiKey={process.env.REACT_APP_TINYMCE_KEY}
      initialValue={body}
      init={{
        height: height || 500,
        content_css: style,
        menubar: false,
        mobile: {
          menubar: true,
          toolbar_drawer: 'floating',
        },
        plugins: ['autoresize'],
        toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter'
          + ' alignright alignjustify | bullist numlist | removeformat',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default RichTextarea;
