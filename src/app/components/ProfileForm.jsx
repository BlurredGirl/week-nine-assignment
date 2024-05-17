import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  const { userId } = auth(); // this will get the id
  async function handleUpdateProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");

    await db.query(
      `UPDATE profiles SET username = $1, bio = $2 WHERE clerk_id = '${userId}'`
    , [username, bio]);
    revalidatePath("/");
  }

  return (
    <div>
      <h2>Update Purrfile</h2>
      <p>
        Welcome to MeowSpace, purrlease choose a username & complete your bio to
        continue...
      </p>
      <form action={handleUpdateProfile}>
        <input name="username" placeholder="Username" />
        <input name="bio" placeholder="Bio" />
        <button>Mrrrp...tap</button>
      </form>
    </div>
  );
}
