import type { PeopleT } from "../types/people";
import "./style.css";

export function CharacterCard({ character }: { character: PeopleT }) {
  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p><strong>Height:</strong> {character.height} cm</p>
      <p><strong>Mass:</strong> {character.mass} kg</p>
      <p><strong>Hair Color:</strong> {character.hair_color}</p>
      <p><strong>Skin Color:</strong> {character.skin_color}</p>
      <p><strong>Eye Color:</strong> {character.eye_color}</p>
      <p><strong>Birth Year:</strong> {character.birth_year}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
    </div>
  );
}
