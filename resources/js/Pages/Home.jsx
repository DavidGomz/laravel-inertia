import { Link } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <h1 className="title">Hellaao</h1>

            <div>
                {posts.map(post => (
                    <div key={post.id} className="mb-4">
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            
            {/* <Link preserveScroll href="/" className="block title mt-[1000px]">
                {new Date().toLocaleTimeString()}
            </Link> */}
        </>
    );
}

Home.layout = page => <Layout children={page} />

export default Home;