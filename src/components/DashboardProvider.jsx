import React, { lazy, Suspense } from 'react';
import { Loading } from './Utils';

const PartnerPages = lazy(() => import('./PartnerPages'));
const Partners = lazy(() => import('./Partners'));
const Tops = lazy(() => import('./Tops'));


const DashboardProvider = (props) => {
    
    const switchProvide = (type) => {
        switch (type) {
            case 'cli':
                return <Partners />;
            case 'pages':
                return <PartnerPages />;
            default:
                return <Tops />;
        }
    }
    
    return (
        <Suspense fallback={ <Loading/> }>
            { switchProvide(props.type) }
        </Suspense>
    )
};

export default DashboardProvider;