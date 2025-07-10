<<<<<<< HEAD
import Link from "next/link";

const HomePage = () => {
  const blogIds = [1, 2, 3, 4];

  return (
    <div>
      <h1>My Blog</h1>
      {blogIds.map((id) => (
        <Link key={id} href={`/blog/${id}`}>
          <div style={{ marginBottom: "20px" }}>
            <img
              src={`/blog${id}.jpg`}
              alt={`Blog ${id}`}
              width="400"
              style={{ cursor: "pointer" }}
            />
            <p>Blog {id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
=======
import Link from "next/link";

const HomePage = () => {
  const blogIds = [1, 2, 3, 4];

  return (
    <div>
      <h1>My Blog</h1>
      {blogIds.map((id) => (
        <Link key={id} href={`/blog/${id}`}>
          <div style={{ marginBottom: "20px" }}>
            <img
              src={`/blog${id}.jpg`}
              alt={`Blog ${id}`}
              width="400"
              style={{ cursor: "pointer" }}
            />
            <p>Blog {id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
>>>>>>> 28b7c337fe87e6a1c06fdcf8a70d13e3c398d14c
