import { useEffect } from "react";
import { useUserState } from "../../ducks/user/selectors";
import { useUserInfoEffect } from "../../hooks/useUserInfoEffect";
import SignInButtonMolecule from "../molecules/SignInButtonMolecule";
import SignOutButtonMolecule from "../molecules/SignOutButtonMolecule";

const HeaderOrganism = () => {
  useUserInfoEffect();
  const state = useUserState().user;

  return (
    <header>
      {!state.userInfo && (
        <SignInButtonMolecule onClick={() => console.log("sign in")} />
      )}
      {state.userInfo && (
        <SignOutButtonMolecule onClick={() => console.log("sign out")} />
      )}
    </header>
  );
};

export default HeaderOrganism;
