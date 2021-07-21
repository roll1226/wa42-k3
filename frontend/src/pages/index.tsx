import { useDispatch } from "react-redux";
import HeadAtoms from "../components/atoms/HeadAtom";
import { asyncRegisterUser } from "../ducks/user/asyncActions";
import { useUserState } from "../ducks/user/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const state = useUserState().user;

  const test = async () => {
    await dispatch(
      asyncRegisterUser({
        username: "hoge",
        email: "hoge@example.com",
        password: "hoge1234",
      })
    );
  };

  return (
    <div>
      <HeadAtoms title="HOME" />

      <button onClick={test}>test click</button>

      <p>{state.userInfo?.username}</p>
      <p>{state.jwt}</p>
    </div>
  );
}
