import request from "../api/request";

export abstract class BaseService<T> {
    protected abstract path: string;
    protected abstract mockedData: T[];

    protected getMockedData(): T[] {
        return this.mockedData;
    }

    async fetchAll(): Promise<T[]> {
        try {
            const response = await request<T[]>("GET", this.path);
            return response.data;
        } catch (error) {
            return this.getMockedData();
        }
    }
}
