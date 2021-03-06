import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import styles from './styles'

const FullWidthTabs = ({ tab = '', handleChange = _ => {}, children, classes }) => {
  return (
    <div>
      <Tabs
        value={tab}
        onChange={handleChange}
        fullWidth
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
      >
        <Tab label="全部" value="" />
        <Tab label="精华" value="good" />
        <Tab label="分享" value="share" />
        <Tab label="问答" value="ask" />
        <Tab label="招聘" value="job" />
      </Tabs>
      <Typography component="div" className={classes.listview}>
        {children}
      </Typography>
    </div>
  )
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FullWidthTabs)