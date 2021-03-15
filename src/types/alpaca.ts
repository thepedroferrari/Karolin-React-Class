import { Accessory } from "./accessory"

export interface AlpacaProps {
  name: string
  color: string
  age: number
  doesLikesCars?: boolean
  sound: string
  accessory: Accessory
}
