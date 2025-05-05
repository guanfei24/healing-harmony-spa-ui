const users = [{ userName: "fei", passWord: "123" }];

export function useAuth(logUser) {
    if (logUser) {
        const hasUser = users.some(
            (u) => u.userName === logUser.userName && u.passWord === logUser.passWord
        );
        if (hasUser) return { user: logUser, isAuthenticated: true };
    }

    return { user: null, isAuthenticated: false };
}
