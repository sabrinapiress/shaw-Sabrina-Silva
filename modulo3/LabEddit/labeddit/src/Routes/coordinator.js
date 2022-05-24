export const goBack = (navigate) => {
    navigate(-1)
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToPostPage = (navigate, id) => {
    navigate(`/feed/posts/${id}`)
}

export const goToRegistrationPage = (navigate) => {
    navigate("/login/cadastro")
}