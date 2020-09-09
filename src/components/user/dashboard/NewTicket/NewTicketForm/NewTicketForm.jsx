import React from 'react';
import { Field } from 'redux-form';
import { Box } from '@material-ui/core';
import { renderTextField } from '../../../../shared/common/FormControls/FormControls';
import RichTextarea from '../../../../shared/dashboard/RichTextarea/RichTextarea';
import { LOCALE } from '../../../../../locale';
import './NewTicketForm.scss';

const bodyField = ({ input, meta: { touched, error } }) => (
  <div className={touched && error ? 'bodyFieldError' : ''}>
    <div className="bodyFieldErrorMsg">{touched && error && <span>{error}</span>}</div>
    <input {...input} type="hidden" />
  </div>
);

const NewTicketForm = ({ onEditorChange }) => {
  const editorHeight = 500;
  const locale = LOCALE.user.dashboard.newTicket;

  const handleTextareaChange = (body) => {
    onEditorChange(body);
  };

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
      </Box>
      <Box m="0 0 1rem">
        <Field name="description" type="hidden" component={bodyField} />
        <Box className="articleBodyEditor">
          <RichTextarea height={editorHeight} onChange={handleTextareaChange} />
        </Box>
      </Box>
    </>
  );
};

export default NewTicketForm;
