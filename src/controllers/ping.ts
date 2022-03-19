interface PingResponse {
    mesage: string;
}

export default class PingController {
    public async getMessage(): Promise<PingResponse> {
        return {
            mesage: 'pong',
        };
    }
}
