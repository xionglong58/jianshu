import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading: 'Loading'
});

export default () => <LoadableComponent />