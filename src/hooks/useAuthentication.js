import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUserData, setUser } from "../store/userSlice";
import { auth } from "../firebase";
import { useState } from "react";

export default function useAuthentication() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const signInCall = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signUpCall = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser(user));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signOutCall = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      dispatch(clearUserData());
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, signInCall, signUpCall, signOutCall };
}
