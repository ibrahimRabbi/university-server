import { Types } from "mongoose"

export type TregisterdSemeter = {
    semesterId: Types.ObjectId,
    status: "UPCOMING" | "ONGOING" | "ENDED",
    minCradit: number,
    maxCredit: number,
}