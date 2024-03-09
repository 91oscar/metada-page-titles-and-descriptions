export async function generateMetadata({ params, searchParams }, parent) {
    // load the post
    const { rows: posts } =
        await sql`SELECT * FROM posts WHERE posts.Id = ${params.id}`;
    const post = posts[0]; // get the first one

    return {
        title: post.title,
    };
}
