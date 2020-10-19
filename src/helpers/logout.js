const Logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cdata');
    window.location.reload();
}

export default Logout;