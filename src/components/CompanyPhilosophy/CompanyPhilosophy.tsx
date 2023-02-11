import React from 'react';
import PhilosophyItem from './PhilosophyItem';
import { FaBookmark, FaBullseye, FaHandHoldingHeart } from 'react-icons/fa';

export interface ICompanyPhilosophy extends React.ComponentPropsWithoutRef<'section'> {

}

const CompanyPhilosophy: React.FC<ICompanyPhilosophy> = ({ className, ...sectionProps }) => {
    return (
        <section className='px-2 sm:px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center justify-between bg-slate-200 text-black'>
            <PhilosophyItem 
                title='Vision'
                icon={<FaBookmark />}
                content='vision content goes here. vision content goes here. vision content goes here.'
            />
            <PhilosophyItem 
                title='Mission'
                icon={<FaBullseye />}
                content='Mission content goes here. Mission content goes here. Mission content goes here.'
            />
            <PhilosophyItem 
                title='Value'
                icon={<FaHandHoldingHeart />}
                content='Value content goes here. Value content goes here. Value content goes here.'
            />
        </section>
    );
};

export default CompanyPhilosophy;