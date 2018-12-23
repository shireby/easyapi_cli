import { Request, Response, NextFunction } from 'express';

export interface EasyApiMiddleware {
    execute(req: Request, res: Response, next: NextFunction): void;
}