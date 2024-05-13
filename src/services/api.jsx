import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/blog/v1',
    timeout: 1000
})

export const getTasks = async () => {
    try {
        return await apiClient.get('/Task/')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const addComment = async (taskId, content, author) => {
    try {
        return await apiClient.post('/Task/comment/', { taskId, content, author })
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}