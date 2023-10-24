const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between py-6">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">About Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The New York Times (often abbreviated as NYT) is an American
              newspaper based in New York City. It is one of the most well-known
              and respected newspapers in the United States and worldwide.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Contact Us</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>123 Main St.</li>
              <li>New York, NY 10001</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@nytimes.com</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Follow Us</h2>
            <ul className="flex flex-wrap text-gray-600 dark:text-gray-400">
              <li className="mr-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li className="mr-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com"
                >
                  Twitter
                </a>
              </li>
              <li className="mr-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
