
export type UserInterface = {
    rollId: string,
    role: 'student' | 'faculty' | 'admin',
    email: string,
    password?: string,
    status: 'in-progress' | 'blocked',
    isDeleted: boolean,
}