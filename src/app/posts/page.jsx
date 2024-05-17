import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import ToastButton from "../components/Toast";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export default async function Posts() {
  // get the userId from clerk
  const { userId } = auth();

  // get my new posts
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profiles.username
            FROM posts
            INNER JOIN profiles ON posts.profile_id = profiles.id;`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    console.log("Someone meowed")
    // get information from the form
    const content = formData.get("content");

    // get the profile id from the database
    const result = await db.query(
      `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows[0].id;

    // add the new post to the database
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES ($1, $2)`, [profileId, content]
    );
    revalidatePath("/");
  }

  return (
    <div className="createposts">
      <h2><img className= "cat" src="https://media.istockphoto.com/id/1097490360/vector/vector-illustration-of-cute-black-cat.jpg?s=612x612&w=0&k=20&c=Ef0qYl79aZJ6NJXJVbJ0onjXVNnSyqrN_TKPjieAIGE=" alt="cat"/>Meows</h2>
      <SignedIn>
        <div className="addpost">
        <h3>Add a meow...</h3>
        <form action={handleAddPost}>
          <textarea name="content" placeholder="What ails you little cat?"></textarea>
<ToastButton/>
        </form>
        </div>
      </SignedIn>

      <SignedOut>
        <p>You need to sign in to meow</p>
        <SignInButton />
      </SignedOut>

      <h3>All Meows</h3>
      <div className="posts">
        {posts.rows.map((post) => {
          return (
            <div key={post.id} className="post">
              <h5>{post.username} meows...</h5>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

