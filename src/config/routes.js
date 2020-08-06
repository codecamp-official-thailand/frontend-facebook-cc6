import ChangePasswordPage from '../containers/pages/ChangePassword';
import FeedPage from '../containers/pages/Feed';
import FriendListPage from '../containers/pages/FriendsList';
import LoginPage from '../containers/pages/Login';
import NotFoundPage from '../containers/pages/NotFound';
import ProfilePage from '../containers/pages/Profile';
import SignUpPage from '../containers/pages/SignUp';

const components = {
    changePassword: {
        url: "/change-password",
        page: ChangePasswordPage
    },
    feed: {
        url: "/",
        page: FeedPage
    },
    friendslist: {
        url: "/friends-list",
        page: FriendListPage
    },
    login: {
        url: "/login",
        page: LoginPage
    },
    notFound: {
        url: "/not-found",
        page: NotFoundPage
    },
    profile: {
        url: "/profile/:id",
        page: ProfilePage
    },
    signup: {
        url: "/signup",
        page: SignUpPage
    }
};

export default {
    guest: [
        components.login,
        components.signup,
    ],
    user: [
        components.feed,
        components.profile,
        components.changePassword,
        components.friendslist
    ],
    notFound: components.notFound,
};