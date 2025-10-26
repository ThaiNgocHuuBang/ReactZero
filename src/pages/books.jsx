import { useState, useEffect } from "react";
import BookTable from "../component/book/book.table";
import { fetchAllBookAPI } from "../services/api.service";

const BookPage = () => {
  const [dataBook, setDataBook] = useState();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const loadBook = async () => {
    const res = await fetchAllBookAPI();
    setDataBook(res.data.result);
  };

  useEffect(() => {
    loadBook();
    // console.log("useEffect");
  }, []);
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
    ></BookTable>
  );
};
export default BookPage;
