/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const TestimonialContainer = ({ name, feedback, designation }) => {
    return (
        <figure className="max-w-screen-md xl:w-[80%] md:max-w-96 bg-theamColor shadow-2xl rounded-md p-4 mx-auto">
            <svg className="xl:h-12 h-6 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
                <p className="xl:text-xl text-xs font-medium text-gray-900 dark:text-white">{feedback}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-extrabold text-xl text-sm text-gray-900 dark:text-white">{name}</div>
                    <div className="pl-3 text-sm font-extrabold text-gray-500 dark:text-gray-400">{designation}</div>
                </div>
            </figcaption>
        </figure>
    )
}


export default TestimonialContainer;