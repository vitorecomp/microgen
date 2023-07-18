// ./packages/ui/index.ts

import { isEven } from "@microgen/server"

export function FooComponent() {
  // giving a random integer number between 0 and 5
  const randomNumber = Math.floor(Math.random() * 5)
  console.log(`FooComponent: ${randomNumber} -> isEven: \
  ${isEven(randomNumber)}`)

  // UI component implementation ...
}