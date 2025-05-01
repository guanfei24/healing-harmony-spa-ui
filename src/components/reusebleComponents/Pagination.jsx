import { useState } from "react";
import usePagination from "../customHooks/usePagination";

export default function Pagination({
  data = [],
  currPage,
  pageSize,
  onPageChange,
  renderItem,
  keyExtractor,
}) {
  const isDisabledPrevPage = currPage === 1;
  const isDisabledNextPage = !(currPage < data.length / pageSize);

  const currData = usePagination({
    data,
    currPage,
    pageSize,
  });

  return (
    <div>
      {currData?.map((item) => {
        return <div key={keyExtractor(item)}>{renderItem(item)}</div>;
      })}
      <button
        disabled={isDisabledPrevPage}
        onClick={() => onPageChange(currPage - 1)}
      >
        {"<"}
      </button>{" "}
      {currData.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => onPageChange(index + 1)}
            style={{ backgroundColor: currPage == index + 1 && "gray" }}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        disabled={isDisabledNextPage}
        onClick={() => onPageChange(currPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
}
