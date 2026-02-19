import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api/api";
import type { PeopleT, PaginatedResponse } from "./types/people";
import { CharacterList } from "./components/CharacterList";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";

type PeopleResponse = PaginatedResponse<PeopleT>;

export default function App() {
  const [characters, setCharacters] = useState<PeopleT[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);

  const fetchPage = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get<PeopleResponse>(url);
      setCharacters((prev) => [...prev, ...res.data.results]);

      setNext(res.data.next);
    } catch {
      setError("Error al obtener personajes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage("/people/");
  }, []);

  return (
  <div>
    {loading && <Loader />}
    {error && <Error message={error} />}
    {!loading && !error && (
      <>
        <h1>Star Wars Characters</h1>

        <CharacterList characters={characters} />

        <div className="controls">
          <button
            disabled={loading || !next}
            onClick={() => next && fetchPage(next)}
          >
            {next ? "Siguiente Página" : "No hay más páginas"}
          </button>
        </div>
      </>
    )}
  </div>
);

}
