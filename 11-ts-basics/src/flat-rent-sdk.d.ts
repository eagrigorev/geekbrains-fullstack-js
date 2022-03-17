export interface Data {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: string[],
  price: number
}

export interface Parameters {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number
}

// Сделал на всякий случай, но вроде как не понадобился
export interface Book {
  flatId: number,
  checkInDate: Date,
  checkOutDate: Date
}

export type Database = Data[];

export function cloneDate(date: Date): Date;

export function addDays(date: Date, days: number): Date;

export class FlatRentSdk {
  database: Database;

  constructor(database: Database)

  get(id: string): Data | null;
  search(parameters: Parameters): Database;
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;
  _resetTime(date: Date): void;
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
  _generateDateRange(from: Date, to: Date): Date[];
  _generateTransactionId(): number;
  _areAllDatesAvailable(flat: Data, dateRange: Date[]): void;
  _formatFlatObject(flat: Data, nightNumber: number): Data;
  _readDatabase(): Database;
  _writeDatabase(database: Database): void;
  _syncDatabase(database: Database): void;
}