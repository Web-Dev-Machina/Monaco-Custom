const Blog = () => {
  return (
    <>
      <div className="mx-auto grid h-96 max-w-screen-2xl grid-cols-12">
        {/* Sidebar nav */}
        <div className="col-span-2 bg-green-500">Start</div>
        {/* Components changing by file selection in sidebar */}
        <div className="col-span-8 h-[1000px] bg-red-500">Middle</div>
        <div className="col-span-2 bg-purple-500">End</div>
      </div>
    </>
  );
};

export default Blog;
