import { DocsInterface } from "../../types/DocsInterface";
import DocItem from "./DocItems";

interface DisplayDocsProps {
  docsFetched: DocsInterface[];
  setDocs: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const DisplayDocs = ({ docsFetched, setDocs }: DisplayDocsProps) => {
  if (docsFetched.length === 0) return null;
  return (
    <div className='flex flex-col p-1 w-full'>
      {docsFetched.map((doc, index) => (
        <DocItem key={index} doc={doc} setDocs={setDocs} />
      ))}
    </div>
  );
};

export default DisplayDocs;
