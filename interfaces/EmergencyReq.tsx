export interface EmergencyReq {
    emergencyKinds: EmergencyKind[];
}

export interface EmergencyKind {
    id:   number;
    name: string;
}
