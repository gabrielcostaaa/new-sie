import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { findUserLogin, findUserPermissions } from "@/backend/usuario/RepositorioUsuario"

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
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null;
        }

        try {
          // Espera a resposta da função findUserLogin
          const user = await findUserLogin(credentials.login, credentials.password);

          // Se o usuário for encontrado, retorna os dados do usuário
          if (user) {
            const permissions = await findUserPermissions(user.user_id);

            return {
              id: user.user_id.toString(), // Convertendo para string se necessário
              name: user.user_name,
              email: user.user_email,
              image: user.user_avatar,
              permissions: permissions.map(p => ({
                id: p.permission.permission_id,
                name: p.permission.permission_name
              }))
            };
          } else {
            // Se o usuário não for encontrado ou a senha estiver errada, retorna null
            return null;
          }
        } catch (error) {
          console.error('Erro na autorização:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.permissions) {
        token.permissions = user.permissions; // Adiciona as permissões ao token
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.permissions) {
        session.user.permissions = token.permissions; // Adiciona as permissões à sessão
      }
      return session;
    }
  }
})

export { handler as GET, handler as POST }

