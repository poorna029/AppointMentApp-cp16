// Write your code here
import {Component} from 'react'

import {v4 as Id} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    isFav: false,
    list: [],
    id: '',
    isStarred: false,
  }

  onTitleClick = e => {
    // console.log(e.target.value)
    this.setState({title: e.target.value})
  }

  onDateClick = e => {
    // console.log(e.target.value)
    this.setState({date: e.target.value})
  }

  starredItems = () => {
    const {list} = this.state
    this.setState(p => ({isStarred: !p.isStarred}))
  }

  fun = i => {
    const {list} = this.state
    // console.log(list)

    this.setState(plist => ({
      list: plist.list.map(y => {
        if (y.id === i) {
          return {...y, isFav: !y.isFav}
        }
        return y
      }),
    }))
  }

  onformSubmit = e => {
    e.preventDefault()
    const {title, date, isFav, list, isStarred} = this.state

    const newObj = {title, date, isFav, id: Id()}

    if (list.length === 0) {
      this.setState({list: [newObj], title: '', date: ''})
    } else {
      this.setState(pi => ({list: [...pi.list, newObj], title: '', date: ''}))
    }
  }

  render() {
    const {date, isStarred, title} = this.state

    let {list} = this.state

    const l = list.filter(x => x.isFav === true)

    if (isStarred === true) {
      list = l
    }

    return (
      <div className="mc1">
        <div className="c1">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="r1">
            <div className="form-sep">
              <form className="form" onSubmit={this.onformSubmit}>
                <label htmlFor="title" className="row">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  onChange={this.onTitleClick}
                  value={title}
                />
                <label htmlFor="calendar">DATE</label>
                <input
                  type="date"
                  id="calendar"
                  onChange={this.onDateClick}
                  value={date}
                  required
                />
                <br />
                <button
                  type="submit"
                  className="button-1"
                  onClick={this.onBtnClick}
                >
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image-1"
            />
          </div>
          <hr className="h-rule" />
          <div className="r2">
            <h1 className="Appointments-heading">Appointments</h1>
            <button className="para-1 " onClick={this.starredItems}>
              starred
            </button>
          </div>
          <div className="Appointments-container">
            <ul className="li-app">
              {list.length > 0
                ? list.map(pi => (
                    <AppointmentItem args={pi} key={pi.id} f1={this.fun} />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
