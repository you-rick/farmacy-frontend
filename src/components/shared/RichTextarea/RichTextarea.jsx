import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useWindowWidth } from '@react-hook/window-size/throttled';
import style from './RichTextarea.scss';
import { layoutBreakpoint } from '../../../utils/helpers/layout-breakpoints';

const RichTextarea = ({ body, height, onChange }) => {
  const windowWidth = useWindowWidth();
  const [initHeight, setInitHeight] = useState(500);

  useEffect(() => {
    setInitHeight(windowWidth < layoutBreakpoint.md ? 250 : 500);
  }, [windowWidth]);

  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <Editor
      apiKey={process.env.REACT_APP_TINYMCE_KEY}
      initialValue={body}
      init={{
        height: height || initHeight,
        content_css: style,
        menubar: false,
        mobile: {
          menubar: true,
          toolbar_drawer: 'floating',
        },
        toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter'
          + ' alignright alignjustify | bullist numlist | removeformat',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default RichTextarea;
