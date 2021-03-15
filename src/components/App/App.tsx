import { Alpaca } from "components/Alpaca"
import { data } from "store"

export const App = () => {
  const date = new Date()
  const now = date.getTime()

  return (
    <div>
      Today is {now}
      {data.map(({ accessory, age, color, doesLikesCars, name, sound }) => (
        <Alpaca
          accessory={accessory}
          age={age}
          color={color}
          doesLikesCars={doesLikesCars}
          name={name}
          sound={sound}
        />
      ))}
    </div>
  )
}
