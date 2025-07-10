<<<<<<< HEAD
const BlogDetails = ({ params }) => {
  return (
    <div>
      <h1>Blog {params.id}</h1>
      <img src={`/blog${params.id}.jpg`} alt={`Blog ${params.id}`} width="400" />
      <p>
        Welcome to our blog! 
      </p>
      <p>description</p>
    </div>
  );
};

export default BlogDetails;
=======
const BlogDetails = ({ params }) => {
  return (
    <div>
      <h1>Blog {params.id}</h1>
      <img src={`/blog${params.id}.jpg`} alt={`Blog ${params.id}`} width="400" />
      <p>
        Welcome to our blog! 
      </p>
      <p>description</p>
    </div>
  );
};

export default BlogDetails;
>>>>>>> 28b7c337fe87e6a1c06fdcf8a70d13e3c398d14c
