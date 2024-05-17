"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <div>
      <h4>GRRRROWL...there are no treats to be found here!</h4>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}