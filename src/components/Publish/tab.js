import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import ArrowForward from '@material-ui/icons/ArrowForward'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { renderSelectField } from '../Form/field'
import validate from './validate'
import styles from './style'

const TabForm = ({ classes, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
      <Field
        name="tab"
        component={renderSelectField}
        label="选择板块"
      >
        <MenuItem value="ask">问答</MenuItem>
        <MenuItem value="share">分享</MenuItem>
        <MenuItem value="job">招聘</MenuItem>
        <MenuItem value="dev">客户端测试</MenuItem>
      </Field>
      <div className={classes.right}>
        <Button
          type="submit"
          color="primary"
        >
          下一步
          <ArrowForward />
        </Button>
      </div>
    </form>
}

TabForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

const TabFormWrapper = reduxForm({
  form: 'publishForm',
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate
})(TabForm)

export default withStyles(styles)(TabFormWrapper)