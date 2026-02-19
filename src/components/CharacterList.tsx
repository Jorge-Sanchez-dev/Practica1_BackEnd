import type { PeopleT } from "../types/people";
import { CharacterCard } from "./CharacterCard";

export function CharacterList({ characters }: { characters: PeopleT[] }) {
  if (!characters || characters.length === 0) {
    return <p>No hay personajes</p>;
  }

  return (
    <div className="list">
      {characters.map((c) => (
        <CharacterCard key={c.url} character={c} />
      ))}
    </div>
  );
}
