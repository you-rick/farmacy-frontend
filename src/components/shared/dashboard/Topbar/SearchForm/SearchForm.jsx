import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from '../Topbar.styles';
import { LOCALE } from '../../../../../locale';
import { renderTextField } from '../../../common/FormControls/FormControls';
import validate from './validate';

const useStyles = makeStyles((theme) => themeStyles(theme));

const SearchForm = ({ handleSubmit }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.topbar;

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.search}>
        <Field
          name="ticketNumber"
          placeholder={locale.searchPlaceholder}
          component={renderTextField}
          InputProps={{
            endAdornment: <IconButton type="submit" size="small"><SearchIcon /></IconButton>,
            classes: {
              root: classes.inputRoot,
              input: classes.inputInput,
            },
          }}
          FormHelperTextProps={{
            className: classes.subTitle,
          }}
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'ticket-search',
  validate,
})(SearchForm);
