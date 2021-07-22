import { useDispatch } from "react-redux";
import HeadAtoms from "../components/atoms/HeadAtom";
import { asyncRegisterUser, asyncSignInUser } from "../ducks/user/asyncActions";
import { useUserState } from "../ducks/user/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const state = useUserState().user;

  const test = () => {
    dispatch(
      asyncRegisterUser({
        username: "hoge",
        email: "hoge@example.com",
        password: "hoge1234",
      })
    );
  };

  const signIn = () => {
    dispatch(
      asyncSignInUser({
        email: "hoge@example.com",
        password: "hoge1234",
      })
    );
  };

  return (
    <div>
      <HeadAtoms title="HOME" />

      <button onClick={test}>register click</button>
      <button onClick={signIn}>sign in click</button>

      <p>{state.userInfo?.username}</p>
      <p>{state.jwt}</p>
    </div>
  );
}
