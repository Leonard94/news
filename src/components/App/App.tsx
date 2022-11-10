import { Route, Switch, Redirect } from 'react-router-dom'

import { StoriesPage } from '../../pages/StoriesPage/StoriesPage'
import { StoryPage } from '../../pages/StoryPage/StoryPage'
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound'
import { Header } from '../Header/Header'

export const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='content'>
          <Switch>
            <Route path='/' exact component={StoriesPage} />
            <Route path='/best' exact component={StoriesPage} />
            <Route path='/top' exact component={StoriesPage} />

            <Route path='/title/:id' exact component={StoryPage} />
            <Route path='/not-found' exact component={PageNotFound} />
            <Route path='*'>
              <Redirect to='/not-found' />
            </Route>
          </Switch>
        </div>
      </main>
    </>
  )
}
