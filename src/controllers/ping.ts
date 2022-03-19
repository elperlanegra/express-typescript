import { Get, Route } from 'tsoa';

interface PingResponse {
    mesage: string;
}

@Route("ping")
export default class PingController {
    @Get("/")
    public async getMessage(): Promise<PingResponse> {
        return {
            mesage: 'pong',
        };
    }
}
