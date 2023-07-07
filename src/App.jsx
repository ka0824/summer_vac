import { AgGridReact } from "ag-grid-react";
import { useState, useCallback } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import info from "./data/data";
import linkRenderer from "./renderers/linkRenderers";

function App() {
  const [rowData] = useState(info);

  const gridOptions = {
    suppressScrollOnNewData: true,
  };

  const [columnDefs] = useState([
    {
      field: "name",
      headerName: "이름",
      width: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "cost",
      headerName: "가격(만원)",
      sortable: true,
      width: 120,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "isSplit",
      headerName: "방 여러개",
      sortable: true,
      width: 120,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "distance",
      headerName: "빠지 거리(km)",
      sortable: true,
      width: 150,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "pickup",
      headerName: "빠지 픽업",
      sortable: true,
      width: 100,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "url",
      headerName: "홈페이지",
      cellRenderer: linkRenderer,
      width: 200,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "significant",
      headerName: "특이사항",
      flex: 1,
      cellStyle: { textAlign: "center" },
    },
  ]);

  return (
    <div className="App">
      <h1
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        숙소 정하기
      </h1>

      <div
        className="ag-theme-alpine"
        style={{
          height: 800,
          width: 1500,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default App;
