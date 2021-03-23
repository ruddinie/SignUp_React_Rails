export const isAuthenticated = () => {
    if (localStorage.getItem('currentUser') && localStorage.getItem('TOKEN')) {
        return true;
    } else {
        localStorage.clear();
        return false;
    }
};