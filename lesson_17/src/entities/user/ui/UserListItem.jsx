import { Fragment } from "react";

export function UserListItem({ user, actions }) {
    return (
        <div
            className="block-row"
        >
            {/* Аватар з першою літерою */}
            <div
                className="avatar"
            >
                {user.name.charAt(0).toUpperCase()}
            </div>

            {/* Інформація про користувача */}
            <div className="wrap items-center">
                <span className="text-lg font-semibold">
                    {user.name}
                </span>
                <span className="text">
                    {user.email}
                </span>
            </div>

            {/* Роль */}
            <span
                className="label-role"
            >
                {user.role}
            </span>
            {!!actions && (
                <div className="wrap">
                    {actions.map((render, index) => (
                        <Fragment
                            key={index}
                        >
                            {render}
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    )
}