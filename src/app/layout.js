import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import ProfileForm from "./components/ProfileForm";

export default async function RootLayout({ children }) {
  const { userId } = auth();

const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );


  // if the user is logged in AND they don't have an entry in the profiles table, add it
  if (profiles.rowCount === 0 && userId !== null) {
    // add user to database
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ('${userId}')`);
  }

  const hasUsername = profiles.rows[0]?.username !== null ? true : false;


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
            <Link href="/">HOME</Link>
            <Link href="/posts">ALL MEOWS</Link>
            <Link href="/myprofile">MY PURROFILE</Link>
          </nav>
        </header>
          <main>
          <SignedOut>{children}</SignedOut>

            <SignedIn>
              {hasUsername && children}
              {!hasUsername && <ProfileForm />}
            </SignedIn>

          </main>
          <footer>
          <h2>Week Nine Assignment</h2>
        </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}