import { useState } from "react";
import { DocsInterface } from "./types/DocsInterface";

import Search from "./components/search/Search";
import Aside from "./components/display/Aside";

function App() {
  const [docsList, setDocsList] = useState<DocsInterface[]>([]);
  return (
    <>
      <Search setDocs={setDocsList} />
      <Aside docs={docsList} />
    </>
  );
}

export default App;
