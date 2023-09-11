import { useState } from "react";
import { DocsInterface } from "./types/DocsInterface";

import Search from "./components/search/Search";
import DocsList from "./components/list/DocsList";

function App() {
  const [docsList, setDocsList] = useState<DocsInterface[]>([]);
  return (
    <div className='flex'>
      <DocsList docs={docsList} setDocs={setDocsList} />
      <Search setDocs={setDocsList} />
    </div>
  );
}

export default App;
