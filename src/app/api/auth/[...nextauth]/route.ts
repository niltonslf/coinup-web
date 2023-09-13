import {httpClient} from '@/data/http';
import {AuthUser} from '@/models';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const providers = [
  CredentialsProvider({
    name: 'credentials',
    type: 'credentials',
    credentials: {
      email: {label: 'email', type: 'text', placeholder: 'email'},
      password: {label: 'password', type: 'password'},
    },
    async authorize(credentials, req) {
      const res = await httpClient.post('signin', {
        email: credentials?.email,
        password: credentials?.password,
      });

      const user = res.body;

      // If no error and we have user data, return it
      if (res.statusCode === 200 && user) {
        return user;
      }
      // Return null if user data could not be retrieved
      return null;
    },
  }),
];

const handler = NextAuth({
  providers,
  session: {strategy: 'jwt'},
  pages: {signIn: '/auth'},
  secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST};
