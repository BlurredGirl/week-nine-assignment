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
      <h2>Update Purrofile</h2>
      <p>
        <h3>Welcome to MeowSpace, purrlease choose a username & complete your bio to
        continue...</h3>
      </p>
      <form className="profileform" action={handleUpdateProfile}>
        <input name="username" placeholder="Username" />
        <input name="bio" placeholder="Bio" />
        <button>Mrrrp...tap</button>
      </form>
      <div className="homepage">
      <img src="https://trello.com/1/cards/66462821ccdd2630942a96a8/attachments/6646282c7b9b69c096872d06/previews/6646282c7b9b69c096873523/download/Designer.jpg" alt="meowspace"></img>
    </div>
    </div>
  );
}
