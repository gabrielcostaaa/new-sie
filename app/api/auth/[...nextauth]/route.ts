import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  pages: {
    signIn: '/'
  },
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          login: { label: "login", type: "text" },
          password: { label: "password", type: "password" }
        },
        async authorize(credentials, req) {
            if (!credentials) {
                return null
            }

            // Verifique se as credenciais estão corretas
            if (credentials.login === "88020193049" && credentials.password === "liess123") {
                return {
                    id: "1",
                    name: "Gabriel Santos Costa",
                    email: "gabrielsantoscosta005@gmail.com",
                    image: "/Avatares/gabriel-costa.jpeg"
                }
            }
            if (credentials.login === "13366488999" && credentials.password === "dieinicarla") {
              return {
                  id: "2",
                  name: "Dieini Carla Ferreira",
                  email: "dieinicarlaferreira@gmail.com",
                  image: "/Avatares/dieini-carla.jpeg"
              }
          }

            // Log das credenciais recebidas para depuração
            console.log(credentials)
            return null
        }
      })
  ]
})

export { handler as GET, handler as POST }
