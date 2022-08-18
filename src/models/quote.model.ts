export interface Quote {
  character: string;
  characterDirection: CharacterDirection;
  image: string;
  quote: string;
}

export enum CharacterDirection {
  Left = "Left",
  Right = "Right",
}
