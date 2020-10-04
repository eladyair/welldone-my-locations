import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Recoil
import { RecoilRoot } from 'recoil';

// Styles
import './App.css';

// Components
import FooterNav from './components/footer-nav/footer-nav';
import HomePage from './pages/home/home';
import CategoriesPage from './pages/categories/categories';
import LocationsPage from './pages/locations/locations';

function App() {
    return (
        <RecoilRoot>
            <div className='app'>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/categories' component={CategoriesPage} />
                    <Route path='/locations' component={LocationsPage} />
                </Switch>
                <FooterNav />
            </div>
        </RecoilRoot>
    );
}

export default App;
