import React, { Component } from 'react'
import Book from '../Book.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Book} alt="" />
      </div>
    )
  }
}
