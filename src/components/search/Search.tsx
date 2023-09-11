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
    <div className='flex flex-col w-8/12'>
      <FormSearch setDocsFetched={setDocsFetched} />
      <DisplayDocs docsFetched={docsFetched} setDocs={setDocs} />
    </div>
  );
};

export default Search;
