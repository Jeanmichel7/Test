import { useEffect, useState } from "react";
import { DocsInterface } from "../../types/DocsInterface";
import DocListItem from "./DoctListItem";
import DocsSpeciality from "./DocsSpeciality";
import { Chip } from "@mui/material";

interface DocsInterfaceProps {
  docs: DocsInterface[];
  setDocs: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const DocsList = ({ docs, setDocs }: DocsInterfaceProps) => {
  const [specilisty, setSpecialisty] = useState<string[]>([]);
  const [specialitySelected, setSpecialitySelected] = useState<string>("");
  const [docsSelected, setDocsSelected] = useState<DocsInterface[]>([]);

  useEffect(() => {
    const speciality = docs
      .map((doc) => doc.libellesavoirfaire)
      .filter((doc) => doc !== null);
    setSpecialisty([...new Set(speciality)]);

    if (specialitySelected === "") return setDocsSelected(docs);
    setDocsSelected(
      docs.filter((doc) => doc.libellesavoirfaire === specialitySelected)
    );
  }, [specialitySelected, docs]);

  const handleReset = () => {
    setSpecialitySelected("");
  };

  return (
    <div className='flex flex-col p-1 w-fit min-w-[400px] max-w-[500px]'>
      <h2 className='font-bold text-xl'> My list</h2>

      {/* speciality */}
      <div>
        <h3 className='font-bold text-center py-2 mt-5 bg-gray-200'>
          Speciality
        </h3>
        {specilisty.map((spec) => (
          <DocsSpeciality
            key={spec}
            spec={spec}
            setSpecialitySelected={setSpecialitySelected}
          />
        ))}
        <Chip label='All' variant='outlined' onClick={handleReset} />
      </div>

      {/* display list */}
      <h3 className='font-bold text-center py-2 mt-5 bg-gray-200'>List</h3>
      {docsSelected.map((doc) => (
        <DocListItem key={doc.identifiantpp} doc={doc} setDocs={setDocs} />
      ))}
    </div>
  );
};

export default DocsList;
