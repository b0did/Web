import type { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U> ? ColumnType<S, I | undefined, U> : ColumnType<T, T | undefined, T>;

export interface User {
    id: Generated<number>;
    password: string;
    username: string;
}

export interface DB {
    user: User;
}