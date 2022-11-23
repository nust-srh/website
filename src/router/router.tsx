import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router'

//Suspense Loader
import SuspenseLoader from '../general/components/SuspenseLoader'

//Layouts
import GeneralPagesLayout from '../layouts/GeneralPagesLayout'
import AdminPagesLayout from '../layouts/AdminPagesLayout'

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    )

//General Pages
const Home = Loader(lazy(() => import('../general/pages/home')))
const About = Loader(lazy(() => import('../general/pages/about')))
const Blog = Loader(lazy(() => import('../general/pages/blog')))
const Alumni = Loader(lazy(() => import('../general/pages/alumni')))
const Article = Loader(lazy(() => import('../general/pages/article')))

//Admin Pages
const AdminBlog = Loader(lazy(() => import('../admin/pages/blog')))
const Events = Loader(lazy(() => import('../admin/pages/events')))
const Executive = Loader(lazy(() => import('../admin/pages/executive')))
const PresidentInitiatives = Loader(
    lazy(() => import('../admin/pages/president-initiatives'))
)
const PhotoGallery = Loader(lazy(() => import('../admin/pages/gallery')))
const Presidents = Loader(lazy(() => import('../admin/pages/presidents')))
const RollCall = Loader(lazy(() => import('../admin/pages/roll-call')))

//Add Pages
const AddBlog = Loader(lazy(() => import('../admin/pages/add/AddBlog')))
const AddPicture = Loader(lazy(() => import('../admin/pages/add/AddPicture')))
const AddEvent = Loader(lazy(() => import('../admin/pages/add/AddEvent')))

const routes: RouteObject[] = [
    {
        path: '',
        element: <GeneralPagesLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'alumni',
                element: <Alumni />,
            },
            {
                path: 'blog/:id',
                element: <Article />,
            },
        ],
    },
    {
        path: 'mambo',
        element: <AdminPagesLayout />,
        children: [
            {
                path: 'blog',
                element: <AdminBlog />,
            },
            {
                path: 'events',
                element: <Events />,
            },
            {
                path: 'executive',
                element: <Executive />,
            },
            {
                path: 'initiatives',
                element: <PresidentInitiatives />,
            },
            {
                path: 'presidents',
                element: <Presidents />,
            },
            {
                path: 'roll-call',
                element: <RollCall />,
            },
            {
                path: 'gallery',
                element: <PhotoGallery />,
            },
            //add pages
            {
                path: 'blog/add',
                element: <AddBlog />,
            },
            {
                path: 'gallery/add',
                element: <AddPicture />,
            },
            {
                path: 'events/add',
                element: <AddEvent />,
            },
        ],
    },
]

export default routes
