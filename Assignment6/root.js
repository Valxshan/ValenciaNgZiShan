// Header component with props
function Header({ title, tagline }) {
  return (
    <header className="blog-header">
      <h1>{title}</h1>
      <p>{tagline}</p>
    </header>
  );
}

// Public blog post
function BlogPost({ title, author, date, content }) {
  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p className="meta">
        <em>
          By {author} on {date}
        </em>
      </p>
      <p>{content}</p>
    </div>
  );
}

// Private blog post
function PrivateBlogPost({ title, author, date }) {
  return (
    <div className="private-posts">
      <h3>{title}</h3>
      <p className="meta">
        <em>
          By {author} on {date}
        </em>
      </p>
      <p>The content of this post is private</p>
    </div>
  );
}

// BlogList component
function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map((post, index) =>
        post.isPrivate ? (
          <PrivateBlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
          />
        ) : (
          <BlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        )
      )}
    </div>
  );
}

// Footer component with year prop
function Footer({ year }) {
  return (
    <footer className="blog-footer">
      <p>&copy; {year} My Blog. All rights reserved.</p>
    </footer>
  );
}

// Root App component
function App() {
  const blogPosts = [
    {
      title: "My First Blog Post",
      author: "John Doe",
      date: "June 1, 2023",
      content: "",
      isPrivate: true,
    },
    {
      title: "My Second Blog Post",
      author: "Jane Smith",
      date: "June 5, 2023",
      content:
        "In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.",
      isPrivate: false,
    },
    {
      title: "A Day in the Life",
      author: "Alice Johnson",
      date: "June 10, 2023",
      content:
        "Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.",
      isPrivate: false,
    },
    {
      title: "Tips for Healthy Eating",
      author: "Bob Lee",
      date: "June 15, 2023",
      content: "",
      isPrivate: true,
    },
    {
      title: "Traveling on a Budget",
      author: "Susan White",
      date: "June 20, 2023",
      content:
        "Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.",
      isPrivate: false,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <Header title="My Blog" tagline="A blog about everything" />
      <BlogList posts={blogPosts} />
      <Footer year={currentYear} />
    </div>
  );
}

// Render the App
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
