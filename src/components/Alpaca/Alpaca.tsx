import { AlpacaProps } from "types/alpaca"
import { generateGreetings } from "utils/greetings"

export const Alpaca = ({
  name,
  accessory,
  color,
  age,
  sound,
  doesLikesCars,
}: AlpacaProps) => {
  const greetings = generateGreetings(age)

  return (
    <section style={{ backgroundColor: color }}>
      <h2>
        {name}, I wear {accessory}s!
      </h2>
      <p>
        {greetings}, my name is {name} and I {!doesLikesCars && "do not"} like
        cars. I like saying {sound}, and I am {age} old.
      </p>
    </section>
  )
}
