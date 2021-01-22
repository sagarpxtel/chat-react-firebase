import React from "react"

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  mynum?: number
  fn?: (bob: string) => string
  obj: Person
}

export const Text: React.FC<Props> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  )
}
