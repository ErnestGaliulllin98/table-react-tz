import React from 'react'
import './ChoiceDate.css'

function ChoiceDate(props) {
  return (
    <div className="choice-date">
      <h1 className="choice-date__title">
        Select the amount of data to download
      </h1>
      <input
        className="choice-date__input"
        type="button"
        value="Small"
        onClick={props.onChoice}
      />
      <input
        className="choice-date__input"
        type="button"
        value="Large"
        onClick={props.onChoice}
      />
    </div>
  )
}

export default ChoiceDate
