import { axiosErrorHandler } from "../api/error";
import request from "../api/request";
import { IFlow } from "../models/flow";
import { IFlowPreview } from "../models/flow_preview";
import { IFlows } from "../models/flows";
import { ILike } from "../models/like";

export class FlowService {
    path = "/flows";

    async fetchFlows(
        genres: string[] = [],
        platforms: string[] = [],
        sort = "",
        order = ""
    ): Promise<IFlows | null> {
        try {
            const params: {
                genre?: string[];
                platform?: string[];
                sort?: string;
                order?: string;
            } = {};
            if (genres.length > 0) {
                params.genre = genres;
            }
            if (platforms.length > 0) {
                params.platform = platforms;
            }
            if (sort) {
                params.sort = sort;
            }
            if (order) {
                params.order = order;
            }
            const response = await request<IFlows, typeof params>(
                "GET",
                this.path,
                {
                    params,
                }
            );
            return response.data;
        } catch (error) {
            axiosErrorHandler<IFlows[]>((error) => {
                console.log(error);
            });
            return null;
        }
    }

    async fetchMyFlows(): Promise<IFlowPreview[] | null> {
        try {
            const response = await request<IFlowPreview[]>(
                "GET",
                `${this.path}/my`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async fetchFlowsByUrl(url: string) {
        try {
            const response = await request<IFlows>("GET", url);
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async fetchFlowById(flowId: number): Promise<IFlow | null> {
        try {
            const response = await request<IFlow>(
                "GET",
                `${this.path}/${flowId}`
            );
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async fetchFlowLike(flowId: number, like: boolean): Promise<ILike> {
        const method = like ? "POST" : "DELETE";

        try {
            const response = await request<ILike>(
                method,
                `${this.path}/${flowId}/likes/`
            );
            return response.data;
        } catch (error) {
            throw new Error("Failed to like/dislike flow");
        }
    }

    async submitNewFlow(
        title: string,
        source: string,
        thumbnail: File,
        video: File,
        interval: number,
        genres: string[] = [],
        platforms: string[] = []
    ) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("source", source);
        formData.append("thumbnail", thumbnail);
        formData.append("video", video);
        formData.append("interval", interval.toString());
        formData.append("genres", genres.join(","));
        formData.append("platforms", platforms.join(","));

        try {
            const response = await request<IFlow, unknown, FormData>(
                "POST",
                "/flows/",
                { data: formData },
                "multipart/form-data"
            );
            return response.data;
        } catch (error) {
            console.error("Failed to post flow:", error);
            return null;
        }
    }
}
