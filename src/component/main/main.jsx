import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const Main = () => {
  const [blog, setBlog] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const blogCollection = collection(db, 'blogs');

  useEffect(() => {
    const unsubscribe = onSnapshot(blogCollection, (snapshot) => {
      const fetchedBlogs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setBlog(fetchedBlogs);
    });

    return () => unsubscribe();
  }, []);


  const filteredBlogs = blog.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.descript.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main_bosh flex  ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl text-center m-auto font-bold text-white">
                Menu   
              </h1>
            </div>
          </div>
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[80%] p-2 border font-bold  border-gray-300 rounded-md "
            />
          </div>
          <div className="flex flex-col">
          <div className="flex flex-wrap ">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <div key={post.id} className="xl:w-1/4 md:w-1/2 w-72 p-2">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <img
                      className="h-52 rounded w-60 object-cover object-center mb-6"
                      src={post.img || "https://dummyimage.com/720x400"}
                      alt="content"
                    />
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {post.title || 'Chichen Itza'}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {post.descript || 'No description available.'}
                      so'm
                    </p>
                    <button className="hover:bg-lime-700 w-[100%] border-[2px]  bg-lime-600 p-2 mt-4 text-white rounded-xl">
                      Buyurtma Berish
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="w-full text-center text-gray-500">No results found</p>
            )}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
