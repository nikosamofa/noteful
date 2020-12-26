
import React from 'react'
import './ButtonAdded.css'

export default function NavButtonAdded(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavButtonAdded', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavButtonAdded.defaultProps ={
  tag: 'a',
}