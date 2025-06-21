import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '../assets/assets'

const Blogs = () => {
    const [blogItems, setBlogItems] = useState([]);
    const [activeItem, setActiveItem] = useState('All');
    const [searchItem, setSearchItem] = useState('');

    // Runs when active category changes
    useEffect(() => {
        let filtered = blog_data;

        if (activeItem !== 'All') {
            filtered = filtered.filter(item => item.category === activeItem);
        }
        if (searchItem.trim() !== '') {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
                item.description.toLowerCase().includes(searchItem.toLowerCase())
            );
        }

        setBlogItems(filtered);
    }, [activeItem]);

    // Runs only when Search button is clicked
    const SearchHandler = () => {
        let filtered = blog_data;

        if (activeItem !== 'All') {
            filtered = filtered.filter(item => item.category === activeItem);
        }

        if (searchItem.trim() !== '') {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
                item.description.toLowerCase().includes(searchItem.toLowerCase())
            );
        }

        setBlogItems(filtered);
    };


    return (
        <div className='mt-10 py-3 mx-4 lg:mx-44 flex items-center justify-center flex-col gap-10'>
            <div className='flex items-center justify-center px-6 pr-0 py-0 bg-white max-w-[500px] rounded-3xl' >
                <input type="search" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} className='px-2 py-3 outline-none min-w-[300px] text-lg max-sm:min-w-[200px]' placeholder='Search for blog...' />
                <button className='bg-[#23488a] text-white px-5 py-3 rounded-3xl cursor-pointer' onClick={SearchHandler}>Search</button>
            </div>
            <div className='flex items-center justify-center text-center gap-2 flex-wrap'>
                <button onClick={() => setActiveItem('All')} className={` px-2 py-2 rounded-3xl min-w-[150px] cursor-pointer hover:bg-[#23488a] hover:text-white ${activeItem === 'All' ? 'bg-[#23488a] text-white' : 'bg-transparent text-gray-600'}`}>All</button>
                <button onClick={() => setActiveItem('Technology')} className={` px-2 py-2 rounded-3xl min-w-[150px] cursor-pointer hover:bg-[#23488a] hover:text-white ${activeItem === 'Technology' ? 'bg-[#23488a] text-white' : 'bg-transparent text-gray-600'}`}>Technology</button>
                <button onClick={() => setActiveItem('Startup')} className={` px-2 py-2 rounded-3xl min-w-[150px] cursor-pointer hover:bg-[#23488a] hover:text-white ${activeItem === 'Startup' ? 'bg-[#23488a] text-white' : 'bg-transparent text-gray-600'}`}>Startup</button>
                <button onClick={() => setActiveItem('Lifestyle')} className={` px-2 py-2 rounded-3xl min-w-[150px] cursor-pointer hover:bg-[#23488a] hover:text-white ${activeItem === 'Lifestyle' ? 'bg-[#23488a] text-white' : 'bg-transparent text-gray-600'}`}>Lifestyle</button>
                <button onClick={() => setActiveItem('Finance')} className={` px-2 py-2 rounded-3xl min-w-[150px] cursor-pointer hover:bg-[#23488a] hover:text-white ${activeItem === 'Finance' ? 'bg-[#23488a] text-white' : 'bg-transparent text-gray-600'}`}>Finance</button>
            </div>


            {blogItems.length > 0 ? (
                <div className='grid grid-cols-2 gap-5 lg:grid-cols-4 max-sm:grid-cols-1'>
                    {blogItems.map((item) => (
                        <div
                            key={item._id}
                            className='shadow-xl rounded opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards] transform hover:scale-105 transition-all duration-500'
                        >
                            <img src={item.image} alt={item.title} className='w-full h-32 object-cover rounded' />
                            <div className='p-4'>
                                <p className='bg-violet-200 max-w-[120px] text-center px-2 py-1 rounded-3xl border-2 border-violet-400 text-violet-800'>
                                    {item.category}
                                </p>
                                <h3 className='text-lg font-semibold mt-2'>{item.title}</h3>
                                <p className="text-sm text-gray-500">
                                    {item.description.replace(/<[^>]+>/g, '').slice(0, 100)}...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className='text-center text-4xl font-semibold text-[#23488a]'>No Items Found</h1>
            )}
        </div>
    )
}

export default Blogs
