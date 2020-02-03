export interface DoorResult {
    success: boolean,
    data: Door
}

export interface DoorResults {
    NextRealizeUrl: string,
    Values: DoorStatus[]
}

export interface Gates {
    66: Door,
    17: Door
}

export interface Door {
    Name: string,
    State: string,
    IsLocked: boolean,
    IsOpen: boolean,
    IsForcedOpen: boolean,
    IsHeldOpen: boolean,
    IsLockdown: boolean,
    InputBypassed: boolean,
    OutputOverridden: boolean,
    ServiceOverridden: boolean,
    NeedsUpdate: boolean,
    DeviceStatus: string,
    HasEvents: boolean,
    Reader1Zone: string,
    Reader2Zone: string,
    Address: string,
    Port: string,
    MacAddress: string,
    SerialNumber: string,
    FWRevision: string,
    PluginName: string,
    PluginCapabilities: string,
    BatteryLevel: number,
    LastCommunicationTime: string,
    LastCommunicationSourceTime: string,
    CustomerName: string,
    Latitude: string,
    Longitude: string,
    ElevatorCabId: number,
    CustomerZone: number,
    DoorName: string,
    DoorType: string,
    DoorBehavior: string,
    DoorSpecifier: string,
    Zone1Name: string,
    Zone2Name: string,
    ReaderInZone: string,
    ReaderOutZone: string,
    DeviceId: number,
    StatusDoor: string,
    StatusLock: string,
    StatusOpen: string,
    IsOnline: boolean,
    IsPending: boolean,
    IsOpened: boolean,
    LastUpdateSuccessUTC: string,
    LastCommunicationUTC: string,
    LastUpdateFailed: boolean,
    RefreshRate: number,
    BatteryStatus: string,
    ReaderInCameraId: number,
    ReaderInCameraName: string,
    ReaderOutCameraId: number,
    ReaderOutCameraName: string,
    ReaderInCameraIds: [],
    ReaderInCameraNames: [],
    ReaderOutCameraIds: [],
    ReaderOutCameraNames: [],
    Id: number
}

export interface DoorStatus {
    Id: number,
    Customer: string,
    Door: string,
    ControllerStatus: string,
    LockStatus: string,
    DoorStatus: string,
    BatteryStatus: number,
    InCameraId: number,
    OutCameraId: number,
    InZoneId: number,
    OutZoneId: number
}

export interface reqOptions {
    doorIDs: string,
    lockStatus?: string, 
    duration?: number
    
}
