import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import copyToClipboard from 'copy-to-clipboard'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from '../../style'

import ListItem from './partials/listItem'

import utils from '../../../../../utils'

@inject('uploads')
@observer
export class UploadedList extends React.Component {
  onDeleteConfirm (index) {
    this.props.uploads.deleteItem(index)
  }

  onDeleteItemClick (index, e) {
    e.preventDefault()

    this.props.openAlert({
      text: `Are you sure you want to delete?`,
      success: {
        text: `Yes`,
        onClick: this.onDeleteConfirm.bind(this, index)
      },
      cancel: {
        text: `Cancel`,
        onClick: () => {}
      }
    })
  }

  onDateActionHover (index, state, e) {
    e.preventDefault()
    this.props.uploads.setDateAction(index, state)
  }

  onCopyActionToggle (index, e) {
    e.preventDefault()
    this.props.uploads.setCopyAction(index)
  }

  onCopyClick (index, e) {
    e.preventDefault()
    copyToClipboard(this.props.uploads.all[index].url || '')
  }

  onExtendItemClick (index, e) {
    e.preventDefault()
    this.props.uploads.extendItem(index)
  }

  render () {
    return this.props.uploads.all
      .slice()
      .map((item, index) => (
        <ListItem
          key={index}
          index={index}
          item={item || {}}
          onDateActionHover={this.onDateActionHover.bind(this, index, true)}
          onDateActionHoverOut={this.onDateActionHover.bind(this, index, false)}
          onCopyActionToggle={this.onCopyActionToggle.bind(this, index)}
          onCopyClick={this.onCopyClick.bind(this, index)}
          onDeleteItemClick={this.onDeleteItemClick.bind(this, index)}
          onExtendItemClick={this.onExtendItemClick.bind(this, index)}
        />
      ))
  }
}

export default UploadedList
