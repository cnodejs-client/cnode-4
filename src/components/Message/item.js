import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import styles from './styles'
import Pixel from '../../utils'

const timeDifference = Pixel.utils.timeDifference
const Item = ({ item, onClick = _ => {}, classes }) => {
  return <React.Fragment>
    <ListItem
      button
      onClick={onClick}
    >
      <Avatar src={item.author.avatar_url} />
      <ListItemText
        primary={
          <Typography gutterBottom className={classes.fontSize} variant="caption">{item.author.loginname}{item.type === 'reply' ? ' 回复' : ' at'}了你</Typography>
        }
        secondary={
          <React.Fragment>
            <Typography className={classes.subtitle} variant="caption" gutterBottom>{item.topic.title}</Typography>
            <Typography className={classes.time} variant="caption"> {timeDifference(new Date(), new Date(item.create_at))}</Typography>
          </React.Fragment>
        } />
      {
        !item.has_read && <ListItemSecondaryAction>
          <FiberManualRecordIcon color="secondary" />
        </ListItemSecondaryAction>
      }
    </ListItem>
    <Divider inset />
  </React.Fragment>
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)
