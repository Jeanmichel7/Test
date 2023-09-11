import { useState } from "react";
import { DocsInterface } from "./types/DocsInterface";

import Search from "./components/search/Search";
import Aside from "./components/display/Aside";

function App() {
  const [docs, setDocs] = useState<DocsInterface[]>([]);
  return (
    <>
      <Search setDocs={setDocs} />
      {/* <div className='flex w-full'> */}
      <Aside docs={docs} />
      {/* </div> */}
    </>
  );
}

export default App;
