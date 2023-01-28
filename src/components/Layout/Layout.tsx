import React from 'react';


export interface ILayout extends React.ComponentPropsWithoutRef<'div'>{

}


const Layout: React.FC<ILayout> = ({ children, ...divProps }) => {
    return (
        <div>
            I'm from layout

            {children}
        </div>
    );
};

export default Layout;