
export type UserInterface = {
    slugId: string,
    password?: string,
    email:string,
    role: 'student' | 'faculty' | 'admin',
    status: 'pendding' | 'blocked',
    isDeleted:boolean
}