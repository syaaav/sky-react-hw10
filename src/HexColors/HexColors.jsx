import { useRef } from 'react'
import getRandomColor from './getRandomColor'
import createArr from './createArr'
import icon from '../icon.png'
import './style.css'

const HexColors = () => {
  const max = 27
  const colorsArr = createArr(max)
  const ref = useRef([])

  function handleChangeColor() {
    for (let i = 0; i < max; i += 1) {
      ref.current[i].childNodes[1].textContent = getRandomColor()
      ref.current[i].style.backgroundColor = `#${getRandomColor()}`
    }
  }

  return (
    <div className="body">
      <h1 className="title">Hexadecimal Colors</h1>
      <div className="fieldButton">
        <input
          type="button"
          value="GENERATE"
          className="button"
          onClick={handleChangeColor}
        />
      </div>
      <div className="colorsField">
        {colorsArr.map((colorItem, index) => (
          <div
            className="colorCard"
            style={{ backgroundColor: `#${colorItem}` }}
            key={colorItem}
            ref={(el) => {
              ref.current[index] = el
            }}
          >
            #{colorItem}
            <img src={icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HexColors
