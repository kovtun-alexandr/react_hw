import { InputField, TextareField } from "@/shared";
import { useEffect, useState } from "react";

export function PostForm({
    initialValues,
    onSubmit,
    isLoading,
    submitText = "Зберегти",
    titleText = "Форма поста",
}) {
    const [title, setTitle] = useState(initialValues.title || "")
    const [body, setBody] = useState(initialValues.body || "")

    useEffect(() => {
        setTitle(initialValues.title);
        setBody(initialValues.body);
    }, [initialValues]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({ title, body });
    };
    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>{titleText}</h2>

            <InputField
                type="text"
                placeholder="Введіть заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <TextareField
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={3}
                placeholder="Введіть тіло поста"
                required
            />

            <button type="submit" className="btn-fit">
                {isLoading ? "Зберігається..." : submitText}
            </button>
        </form>
    );
}