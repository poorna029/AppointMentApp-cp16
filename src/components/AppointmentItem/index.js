// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = is => {
  const {args, f1} = is
  //   console.log(f1)
  const {title, isFav, date, id} = args
  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const favFunction = () => {
    f1(id)
  }

  return (
    <li className="list-type">
      <div className="col1">
        <div className="row1">
          <p className="title-heading">{title}</p>
          <button
            onClick={favFunction}
            data-testid="star"
            className="favButton"
          >
            <img
              src={
                isFav
                  ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
              }
              alt="star"
              className="image-star"
            />
          </button>
        </div>
        <p className="date-para">{newDate}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
