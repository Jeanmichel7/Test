import { useState } from "react";
import { DocsInterface } from "../../types/DocsInterface";
import FormSearch from "./FormSearch";
import DisplayDocs from "./DocsDisplay";

interface SearchProps {
  setDocs: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const Search = ({ setDocs }: SearchProps) => {
  const [docsFetched, setDocsFetched] = useState<DocsInterface[]>([]);

  return (
    <>
      <FormSearch setDocsFetched={setDocsFetched} />;
      <DisplayDocs docsFetched={docsFetched} setDocs={setDocs} />
    </>
  );
};

export default Search;
