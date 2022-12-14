import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBaord($number: Float!) {
    fetchBoard(number: $number) {
      _id
      number
      message
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return <BoardWrite isEdit={true} boardData={data} />;
}
