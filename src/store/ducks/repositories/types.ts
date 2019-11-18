// Actions
export enum RepositoriesTypes {
    LOAD_REQUEST = '@repositorires/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositorires/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositorires/LOAD_FAILURE',
}

// Data types
export interface Repository {
    id: number,
    name: string
}

// State type
export interface RepositoriesState {
    readonly data: Repository[], // estado do redux
    loading: boolean,
    error: boolean
}
