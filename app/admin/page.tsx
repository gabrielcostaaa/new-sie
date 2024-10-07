import { findUserProfile } from "@/backend/usuario/RepositorioUsuario";
import Dashboard from "@/components/Dashboard";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await getServerSession()

  const userTerms = await findUserProfile(session?.user.email)

  console.log(userTerms)

  if (!session){
    redirect("/")
  }

<<<<<<< HEAD
  //TODO if (primeiroLoginUsuario){ 
  //   return (
  //     <TermosPrivacidade/>
  //   )
  // }
=======
  if (userTerms?.user_termsAccepted == false){
    return (
      redirect("/admin/termos")
    );
  }
>>>>>>> 56410f474dfca822a82799a80ebd754299c8501b

  return (
      <Dashboard/>
  );
}