import { useState, FC } from "react";
import { useAction } from "../hooks/useAction";

const RepositoriesList: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchRepositories } = useAction();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(searchTerm);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
