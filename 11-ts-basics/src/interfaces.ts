export interface user {
  name: string,
  avatarUrl: string
}

export interface getUserDataCallback {
  (error?: Error, isUserData?: boolean): void
}

export interface searchFormData {
  checkIn: string,
  checkOut: string,
  maxPrice: string
}