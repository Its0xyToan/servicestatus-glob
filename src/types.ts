
export const Statuses = {
    "Operational": "Operational",
    "Degraded": "Degraded",
    "PartialOutage": "PartialOutage",
    "MajorOutage": "MajorOutage",
    "Maintenance": "Maintenance",
}

export type PossibleStatus = keyof typeof Statuses


export interface Component {
    id: string
    name: string
    description: string
    status: PossibleStatus,
    isGroup: boolean,
    components?: Component[]
}