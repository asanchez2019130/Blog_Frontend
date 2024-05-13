import { useState } from "react";
import { addComment as addCommentRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useAddComment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const addComment = async (taskId, content, author) => {
        setIsLoading(true);
        try {
            await addCommentRequest(taskId, content, author);
            toast.success("Comentario agregado exitosamente");
        } catch (error) {
            toast.error("Ocurrió un error al agregar el comentario");
            console.error("Error al agregar comentario:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        addComment,
        isLoading
    }
}