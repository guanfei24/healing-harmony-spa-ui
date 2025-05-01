export default function usePagination({ data, currPage, pageSize }) {
  return data.slice(
    (currPage - 1) * pageSize,
    (currPage - 1) * pageSize + pageSize
  );
}
