import React from 'react'
import Checker from '../images/7.jpg'

const Display = (props) => {
  const newBackgroundColor = `hsla(${props.hue}, ${props.saturation}%, ${props.lightness}%, ${props.alpha})`
  console.log(newBackgroundColor)
  return (
    <aside className="Display">
      <article style={{ backgroundImage: `url(${Checker})` }}>
        <sub
          className="UserSelection"
          style={{
            backgroundColor: newBackgroundColor,
          }}
        ></sub>
      </article>
    </aside>
  )
}

export default Display
