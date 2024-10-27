import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/lib/live";
import { STARTUPS_QUERY } from "@/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  // interface StartUpTypeCard {
  //   _createdAt: Date;
  //   views: number;
  //   author: {
  //     _id: number,
  //     name: string
  //   };
  //   _id: number;
  //   description: string;
  //   image: string;
  //   category: string;
  //   title: string;
  // }

  // const posts = await client.fetch(STARTUPS_QUERY)

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  console.log(posts);

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {
  //       _id: 1,
  //       name: 'ad'
  //     },
  //     _id: 1,
  //     description: "this is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1728619054334-841f8b6e87da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
