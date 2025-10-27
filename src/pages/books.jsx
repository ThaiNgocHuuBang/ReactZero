import { useState, useEffect } from "react";
import BookTable from "../component/book/book.table";
import { fetchAllBookAPI } from "../services/api.service";

const BookPage = () => {
  const [dataBook, setDataBook] = useState();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const loadBook = async () => {
    const res = await fetchAllBookAPI(current, pageSize);
    setDataBook(res.data.result);
    setCurrent(res.data.meta.current);
    setPageSize(res.data.meta.pageSize);
    setTotal(res.data.meta.total);
  };

  useEffect(() => {
    loadBook();
    // console.log("useEffect");
  }, [current, pageSize]);
  // console.log("render");
  return (
    <BookTable
      dataBook={dataBook}
      setDataBook={setDataBook}
      current={current}
      pageSize={pageSize}
      total={total}
      setCurrent={setCurrent}
      setPageSize={setPageSize}
      loadBook={loadBook}
    ></BookTable>
  );
};
export default BookPage;
