import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Posts() {
  // get the userId from clerk
  const { userId } = auth();

  // get the clerk id from the database using const like below
  const profile = await db.query(
    `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
  );
  console.log(profile.rows[0].id);

  const profiledata = profile.rows[0].id;

  // get my new posts
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profiles.username
            FROM posts
            INNER JOIN profiles ON posts.profile_id = ${profiledata}`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    console.log("Someone meowed");
    // get information from the form
    const content = formData.get("content");

    // get the profile id from the database
    // const result = await db.query(
    //   `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
    // );
    // const profileId = result.rows[0].id;

    // add the new post to the database
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES (${profiledata}, '${content}')`
    );
  }

  return (
    <div className="createposts">
      <h2>
        <img
          className="cat"
          src="https://trello.com/1/cards/6647387534ccff9d3ac19029/attachments/6647387eccb02faad3f01a2e/previews/6647387eccb02faad3f01a39/download/cute-cat-cartoon-clipart-1676633710TRA.jpg"
          alt="white cat"
        />
        My Purrofile
      </h2>
      <SignedIn>
        <div className="addpost">
          <h3>Add a meow...</h3>
          <form action={handleAddPost}>
            <textarea
              name="content"
              placeholder="What ails you little cat?"
            ></textarea>
            <button>Mrrrp...tap</button>
          </form>
        </div>
      </SignedIn>

      <SignedOut>
        <p>You need to sign in to meow</p>
        <SignInButton />
      </SignedOut>

      <h3>My Meows</h3>
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
