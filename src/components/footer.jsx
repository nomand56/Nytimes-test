import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between py-6">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">About Us</h2>
                        <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu fringilla fringilla, massa magna condimentum augue, vel consectetur sapien nunc vel mauris.</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li>123 Main St.</li>
                            <li>New York, NY 10001</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@nytimes.com</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                        <ul className="flex text-gray-600 dark:text-gray-400">
                            <li className="mr-4"><a href="#">Facebook</a></li>
                            <li className="mr-4"><a href="#">Twitter</a></li>
                            <li className="mr-4"><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
