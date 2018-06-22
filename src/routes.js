import BlogPage from "components/Pages/BlogPage";
import UsersPage from "components/Pages/UsersPage";
import MainPage from "components/Pages/MainPage";
import CommentsPage from "components/Pages/CommentsPage";

export default [
    {
        path: "/users",
        exact: true,
        component: UsersPage
    },
    {
        path: "/blog",
        exact: true,
        component: BlogPage
    },
    {
        path: "/comments",
        exact: true,
        component: CommentsPage
    },
    {
        path: "/",
        exact: true,
        component: MainPage
    },
]

