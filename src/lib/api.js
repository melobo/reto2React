
async function getPosts() {

    const emptyPosts = [
        {
            name: '',
            login: '',
            createdAt: '',
            updatedAt: '',
            img: ''
        }
    ]

    try {
        const response = await window.fetch('https://api.github.com/users/kodemia/repos')
        const payload = await response.json()

        if (!response.ok) {
            window.alert('La respuesta es mala')
            return emptyPosts
        }

        const posts = payload.map((badPost) => ({
            name: badPost.name,
            login: badPost.owner.login,
            createdAt: badPost.created_at,
            updatedAt: badPost.updated_at,
            img: badPost.owner.avatar_url
        }))

        setPosts(posts)

    } catch (error) {
        window.alert('Ocurrio un error al obtener los posts')
        return emptyPosts
    }
}

const api = {
    getPosts
}

export default api
