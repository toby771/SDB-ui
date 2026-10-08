import { createBrowserRouter } from 'react-router-dom'

import { routers } from '@/configs'
import Layout from '@/layout'
import Landing from '@/pages/landing'
import DevSkill from '@/pages/skill'
import Projects from '@/pages/projects'
import Team from '@/pages/team'
import Reputation from '@/pages/reputation'
import Contact from '@/pages/contact'
import ProjectDetail from '@/pages/projectdetail'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routers.Landing,
        element: <Landing />
      },
      {
        path: routers.DevSkill,
        element: <DevSkill />
      },
      {
        path: routers.Projects,
        element: <Projects />
      },
      {
        path: routers.Team,
        element: <Team />
      },
      {
        path: routers.Reputation,
        element: <Reputation />
      },
      {
        path: routers.Contact,
        element: <Contact />
      },
      {
        path: routers.Project,
        element: <ProjectDetail />
      }
    ]
  }
])

export default routes
