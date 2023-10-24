function Card({ post }) {
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <div className="p-4 md:w-1/3 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col justify-between h-full border-2 border-opacity-60 rounded-lg overflow-hidden dark:border-gray-700">
        <div>
          <img
            width="720"
            height="400"
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={post.multimedia[0].url}
            alt="blog"
          />
          <div className="p-6 pb-0">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
              {post.section}
            </h2>
            <h1 className="title-font text-lg font-medium mb-3">
              {post.title}
            </h1>
            <p className="leading-relaxed mb-3">{post.abstract}</p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center flex-wrap ">
            <a
              className="text-blue-500 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-500 inline-flex items-center lg:mb-0 mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href={post.url}
            >
              Read Article
            </a>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm border-gray-200 lg:ml-auto md:ml-0 ml-auto py-1">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {randomInteger(100, 999) + " K"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
