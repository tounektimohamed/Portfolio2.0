import { FiBriefcase, FiCalendar, FiUser, FiCode } from 'react-icons/fi';

const TimeLineItem = ({ companyName, designation, date, year, technology, isLeft }) => {
    const containerClass = isLeft ? 'flex flex-row items-center' : 'flex flex-row-reverse items-center';
    const textClass = isLeft ? 'text-left' : 'text-right';
  return (
    <div className={containerClass}>
      <div className="w-full">
        <div className={`sm:${textClass}`}>
          <strong className="text-xl text-sky-500">{year}</strong>
          <p className="text-xs font-medium text-gray-600 sm:text-sm">
            <FiCalendar className="inline-block mr-2" />
            {date}
          </p>
          <p className="text-xs font-medium text-gray-600 sm:text-sm">
            <FiBriefcase className="inline-block mr-2" />
            {companyName} - {designation}
          </p>
          <p className="text-xs font-medium text-gray-600 sm:text-sm">
            <FiCode className="inline-block mr-2" />
            {technology}
          </p>
        </div>
      </div>
      <div className="mr-8 flex items-center justify-center sm:mx-12 sm:w-[10%]">
        <div className="h-36 w-1 bg-sky-200"></div>
        <div className="absolute z-10 rounded-full border border-sky-500 bg-white p-2 text-sky-500 shadow">
          <FiUser size={24} /> {/* Use the Feather icon for a person */}
        </div>
      </div>
      <div className="hidden w-full sm:block"></div>
    </div>
  )
}

export default TimeLineItem