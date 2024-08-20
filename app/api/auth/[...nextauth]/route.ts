import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserLogin, findUserPermissions } from "@/backend/usuario/RepositorioUsuario";

const handler = NextAuth({
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null;
        }

        try {
          const user = await findUserLogin(credentials.login, credentials.password);

          if (user) {
            const permissions = await findUserPermissions(user.user_id);

            return {
              id: user.user_id,
              name: user.user_name,
              email: user.user_email,
              image: user.user_avatar,
              permissions: permissions.map(p => ({
                id: p.permission.permission_id,
                name: p.permission.permission_name,
              })),
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Erro na autorização:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Adiciona o id diretamente no token
        token.permissions = user.permissions;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id; // Passa o id diretamente para a sessão
      }
      if (token?.permissions) {
        session.user.permissions = token.permissions;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };

