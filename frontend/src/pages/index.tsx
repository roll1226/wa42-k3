import HeadAtoms from "../components/atoms/HeadAtom";
import { useUserState } from "../ducks/user/selectors";

export default function Home() {
  const state = useUserState().user;

  return (
    <div>
      <HeadAtoms title="HOME" />

      <p>{state.userInfo?.username}</p>
      <p>{state.jwt}</p>
    </div>
  );
}
