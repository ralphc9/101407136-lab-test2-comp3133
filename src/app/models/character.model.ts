export interface Character {
    name: string;
    house: string;
    image: string;
    species: string;
    wizard: boolean;
    ancestry: string;
    wand: {
      wood: string;
      core: string;
      length: number;
    };
    actor: string;
  }
  