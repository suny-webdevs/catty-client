import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import auth from "../firebase/firebaseConfig"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(false)

  const userSignUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userUpdate = (name) => {
    return updateProfile(auth.currentUser, { displayName: name })
  }

  const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userSignOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      return () => unSubscribe()
    })
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    userSignUp,
    userSignIn,
    userUpdate,
    userSignOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthProvider
