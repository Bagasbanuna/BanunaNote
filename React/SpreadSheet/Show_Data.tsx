import { b_Editor } from "@/g_state/editor/b_editor";
import { api } from "@/lib/api";
import { ModelEditor } from "@/model/editor/model_editor";
import { Box, Button } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Spreadsheet, {
  DataViewer,
  CellBase,
  DataEditorComponent,
  DataViewerComponent,
} from "react-spreadsheet";

const SheetEditor = () => {
  const [isData, setIsData] = useState<ModelEditor[] | any>([]);

  useShallowEffect(() => {
    loadData();
  }, []);

  //LOAD DATA
  async function loadData() {
    const res = await fetch("/api/editor/api-editor");
    if (res.status === 200) {
      const data = await res.json();
      //   return data
      const hasil = [];
      for (let itm of data) {
        const maka = Object.values(itm).map((v) => ({
          value: v,
        }));

        hasil.push(maka);
      }
      hasil.unshift(Object.keys(data[0]).map((v) => ({ value: v })));
      setIsData(hasil);

      //   console.log(data);
    }
  }

  //Isi
  const listHeader = [
    "id",
    "candidateId",
    "provinceId",
    "cityId",
    "trust",
    "joy",
    "surprise",
    "anticipation",
    "sadness",
    "fear",
    "anger",
    "disgust",
    "date",
    "createdAt",
    "updatedAt",
  ];

  const pageCount = 100

  return (
    <>
      {/* {JSON.stringify(isData.map((e : any) => e ))} */}
      {/* {JSON.stringify(isData[0])} */}

      <Box>
        
          <Spreadsheet
            data={isData}
            darkMode={true}
          />
        
      </Box>
      
    </>
  );
};

export default SheetEditor;
