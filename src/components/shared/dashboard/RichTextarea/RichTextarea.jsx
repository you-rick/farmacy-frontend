import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { useWindowWidth } from '@react-hook/window-size/throttled';
import { toggleIsDataFetching } from '../../../../store/appReducer';
import { setEditorValue } from '../../../../store/richtextReducer';
import style from './RichTextarea.scss';
import { layoutBreakpoint } from '../../../../utils/helpers/layout-breakpoints';

const RichTextarea = ({ height, onChange, onInit, toggleIsDataFetching, editor, setEditorValue }) => {
  const windowWidth = useWindowWidth();
  const { value } = editor;
  const [initHeight, setInitHeight] = useState(500);
  const bodyHeight = windowWidth < layoutBreakpoint.md ? 250 : height;

  useEffect(() => {
    setInitHeight(windowWidth < layoutBreakpoint.md ? 250 : 500);
  }, [windowWidth]);

  useEffect(() => {
    toggleIsDataFetching(true);
  }, [toggleIsDataFetching]);

  const handleEditorChange = (content) => {
    onChange(content);
    setEditorValue(content);
  };

  const handleInit = () => {
    if (onInit) onInit(true);
    toggleIsDataFetching(false);
  };

  const initData = {
    height: bodyHeight || initHeight,
    content_css: style,
    menubar: false,
    mobile: {
      menubar: true,
      toolbar_drawer: 'floating',
    },
    toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter'
      + ' alignright alignjustify | bullist numlist | removeformat',
    setup: (editor) => {
      editor.on('init', () => {
        handleInit();
      });
    },
  };

  return (
    <Editor
      apiKey={process.env.REACT_APP_TINYMCE_KEY}
      initialValue={value}
      value={value}
      init={initData}
      onEditorChange={handleEditorChange}
    />
  );
};

const mapStateToProps = (state) => ({
  isDataFetching: state.app.isDataFetching,
  editor: state.richtext,
});

export default connect(mapStateToProps, {
  toggleIsDataFetching,
  setEditorValue,
})(RichTextarea);
