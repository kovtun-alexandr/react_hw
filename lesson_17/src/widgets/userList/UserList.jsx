import { useState } from "react";
import { UserDeleteButton, UserListItem } from "@/entities/user";
import { useGetUsersQuery } from "@/entities/user/api/userApi";
import { PaginationsBlock } from "@/shared";

export function UserList() {
    const [page, setPage] = useState(1)
    const limit = 10
    const { data, isLoading, error } = useGetUsersQuery({ page, limit })

    if (isLoading) {
        return (
            <div
                className="text-center"
            >
                Завантаження...
            </div>
        )
    }
    if (error) {
        return (
            <div
                className="text-center text-[var(--cp-neon-pink)]"
            >
                Помилка: {error.toString()}
            </div>
        )
    }

    const users = data?.items || []
    const totalPages = data?.totalPages || 1
    return (
        <div
            className="block-col"
        >
            {users.map((user) => (
                <UserListItem
                    key={user.id}
                    user={user}
                    actions={[
                        <UserDeleteButton id={user.id} />
                    ]}
                />
            ))}
            <PaginationsBlock
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
}