'use client'

import { findUserProfile } from "@/backend/usuario/RepositorioUsuario";
import UserProfile from "@/components/UserProfile";
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react";

export default function () {
  const [user, setUser] = useState([])
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const session = await getSession()
        const fetchedUser = await findUserProfile(session?.user.email)
        console.log("Usuário recebido:", fetchedUser)
        setUser(fetchedUser)
      } catch (error){
        console.error("Erro ao buscar usuário:", error)
      }
    }

    fetchUser()
  }, [])

    return (
      <UserProfile
      user={user}
      />
    );
  }