import React, { useEffect, useState } from "react";
import {
  BottomContent,
  H1,
  PageBtn,
  TableContainer,
  TableStyle,
  TdStyle,
  TrStyle,
} from "./my-table.s";
import { ReactComponent as RightIcon } from "./icons/right.svg";
import MySelect from "./components/my-select/my-select";
import LoadingTable from "./components/loading/loading";

function MyTable(props) {
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(
    props.pageLimit ? props.pageLimit : "10"
  );
  const [pages, setPages] = useState(
    props.total ? Math.ceil(props.total / pageLimit) : 1
  );
  useEffect(() => {
    setPages(props.total ? Math.ceil(props.total / pageLimit) : 1);
  }, [pageLimit]);
  if (props.loading) {
    return <LoadingTable width={props.width} />;
  }
  return (
<<<<<<< HEAD
    <TableContainer width="100%">
=======
    <TableContainer width={props.width}>
>>>>>>> 1bbaa1c11d96ae3cb57db18f5060302fdac96fb1
      <TableStyle>
        <TrStyle>
          {props.data.header.map((item, index) => (
            <TdStyle key={index}>{item}</TdStyle>
          ))}
        </TrStyle>
        {props.data?.body.map((item, index) => (
          <TrStyle key={index}>
            {props.data.order.map((subItem, subIndex) => (
              <TdStyle key={subIndex}>
                {typeof subItem === "string" ? item[subItem] : item(subItem)}
              </TdStyle>
            ))}
          </TrStyle>
        ))}
      </TableStyle>
      {props.paginationNone ? (
        ""
      ) : (
        <BottomContent>
          <H1>Count items: </H1>
          <MySelect
            table
            option={["5", "10", "20", "30", "50", "70", "100"]}
            value={pageLimit}
            onChange={(e) => setPageLimit(e.target.value)}
          />
          <PageBtn
            disabled={page === 1}
            left
            onClick={() => setPage(parseFloat(page) - 1)}
          >
            <RightIcon />
          </PageBtn>
          <MySelect
            height="25px"
            table
            option={Array.from(Array(pages).keys(), (x) => x + 1)}
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
          <PageBtn
            disabled={page === pages}
            onClick={() => setPage(parseFloat(page) + 1)}
          >
            <RightIcon />
          </PageBtn>
        </BottomContent>
      )}
    </TableContainer>
  );
}

export default MyTable;
