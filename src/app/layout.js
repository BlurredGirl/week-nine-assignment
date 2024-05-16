import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function RootLayout({ children }) {
  const { userId } = auth();

const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );
console.log(profiles);


  // if the user is logged in AND they don't have an entry in the profiles table, add it
  if (profiles.rowCount === 0 && userId !== null) {
    // add user to database
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ('${userId}')`);
  }


  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          <nav className="navbar">
            <Link href="/">H O M E</Link>
            <Link href="/posts">M E O W S</Link>
          </nav>
        </header>
          <main>
            {children}
          </main>
          <footer>
          <h2>Week Nine Assignment</h2>
        </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}