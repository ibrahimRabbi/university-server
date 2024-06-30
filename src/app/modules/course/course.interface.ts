import { Types } from "mongoose"

export type Prerequisite = {
    couresId: Types.ObjectId,
    isDeleted :boolean
}

export type Tcoures = {
    title: string,
    prefix:string,
    code: number,
    credit: number,
    prerequisite: Array<object>
}