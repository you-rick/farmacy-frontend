import React, { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size/throttled';
import { Field } from 'redux-form';
import { Box } from '@material-ui/core';
import { renderTextField } from '../../../../shared/FormControls/FormControls';
import RichTextarea from '../../../../shared/RichTextarea/RichTextarea';
import { LOCALE } from '../../../../../locale';
import { layoutBreakpoint } from '../../../../../utils/helpers/layout-breakpoints';
import './NewTicketForm.scss';

const bodyField = ({ input, meta: { touched, error } }) => (
  <div className={touched && error ? 'bodyFieldError' : ''}>
    <div className="bodyFieldErrorMsg">{touched && error && <span>{error}</span>}</div>
    <input {...input} type="hidden" />
  </div>
);

const NewTicketForm = ({ onEditorChange }) => {
  const windowWidth = useWindowWidth();
  const locale = LOCALE.user.dashboard.newTicket;
  const [editorHeight, setEditorHeight] = useState(500);

  const handleTextareaChange = (body) => {
    onEditorChange(body);
  };

  useEffect(() => {
    setEditorHeight(windowWidth < layoutBreakpoint.md ? 250 : 500);
  }, [windowWidth]);

  return (
    <>
      <Box m="0 0 1.5rem">
        <Field
          label={locale.form.title}
          name="subject"
          type="text"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          component={renderTextField}
        />
        <Field
          label={locale.form.to}
          name="to"
          type="email"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          component={renderTextField}
        />
      </Box>
      <Box m="0 0 1rem">
        <Field name="issue" type="hidden" component={bodyField} />
        <Box className="articleBodyEditor">
          <RichTextarea height={editorHeight} onChange={handleTextareaChange} />
        </Box>
      </Box>
    </>
  );
};

export default NewTicketForm;