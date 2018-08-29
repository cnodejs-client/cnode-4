import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import WorkIcon from '@material-ui/icons/Work'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import compose from 'lodash/fp/flowRight'
import { getUserinfo } from '../../actions'
import { Avatar, Section, Loading } from '../../components/User'

class User extends Component {
  componentDidMount() {
    const { getUserinfo, match } = this.props
    getUserinfo(match.params.loginname)
  }
  listItemClickHandle = ({ id }) => {
    this.props.history.push(`/topic/${id}`)
  }
  goBack = () => {
    this.props.history.go(-1)
  }
  render() {
    const { isLoading, user } = this.props
    if (isLoading || !user) {
      return <Loading />
    }
    const sections = [
      {
        title: '创作内容',
        icon: HowToRegIcon,
        topics: user.recent_topics
      },
      {
        title: '最近参与',
        icon: WorkIcon,
        topics: user.recent_replies
      }
    ]
    return <React.Fragment>
      <Avatar user={user} goBack={this.goBack} />
      <List subheader={<li />}>
        {
          sections.map(section => (
            <Section key={section.title} section={section} listItemClickHandle={this.listItemClickHandle} />
          ))
        }
      </List>
    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  const { user: { user, isLoading } } = state
  return {
    user,
    isLoading
  }
}

const mapDispatchToProps = dispatch => ({
  getUserinfo: compose(dispatch, getUserinfo)
})

export default connect(mapStateToProps, mapDispatchToProps)(User)