import { useEffect, useState } from "react";
// import useFetch from "../customHooks/useFetch";
import Pagination from "./Pagination";
import { mockData } from "../../data";
export default function PaginationTest() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  //   const { error, data, loading } = useFetch(url);
  const data = mockData;
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const OnPageChange = (pageIndex) => {
    setCurrPage(pageIndex);
  };
  //   if (error) return error;
  //   if (loading) return "Data is loading...";

  return (
    <div>
      <h3>Pagination Test</h3>
      <Pagination
        data={data}
        currPage={currPage}
        pageSize={pageSize}
        onPageChange={OnPageChange}
        renderItem={(item) => <div>{item.title}</div>}
        keyExtractor={(item) => item.id}
      />
    </div>
  );
}
