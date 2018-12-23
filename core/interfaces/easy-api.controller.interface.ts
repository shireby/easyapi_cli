import { Request, Response } from 'express';

export interface EasyApiController {
    index(req: Request, res: Response): void;
}