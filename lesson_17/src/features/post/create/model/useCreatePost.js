import { useCreatePostMutation } from "@/entities/post";


export const useCreatePost = () => {
    const [createPost, { isLoading, error }] = useCreatePostMutation()

    const onSubmit = async ({ title, body }) => {
        try {
            await createPost({ title, body }).unwrap()
        } catch (e) {
            console.error("Помилка при створення поста:", e)
            throw e
        }
    }

    return {
        onSubmit,
        isLoading,
        error
    }
}