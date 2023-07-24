"use client"

import { SessionProvider } from "next-auth/react"

export const NextAuthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>
}

// In NextAuth.js, a session provider is a component that wraps your application and provides the session data and authentication functionality to the components within your app. It enables authentication state management and allows you to access session information, such as the currently authenticated user, across your application.

// The session provider component is typically imported from the next-auth/react package and used to wrap your application's root component in the Next.js _app.js file.
// In this example, the SessionProvider component is used to wrap the Component with the session data (pageProps.session) provided as a prop. This makes the session information available to all the components rendered in the application.