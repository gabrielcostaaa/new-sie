import Dashboard from "@/components/Dashboard";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await getServerSession()

  if (!session){
    redirect("/")
  }

  //TODO if (primeiroLoginUsuario){ 
  //   return (
  //     <TermosPrivacidade/>
  //   )
  // }

  return (
      <Dashboard/>
  );
}