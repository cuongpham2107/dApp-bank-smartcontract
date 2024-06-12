interface IController<Type> {
    index: (req: Request, res: Response) => Type[] | Promise<Type[]>;
    create: (req: Request, res: Response) => void;
    store: (req: Request, res: Response) => void;
    show: (req: Request, res: Response) => Type | Promise<Type>;
    edit: (req: Request, res: Response) => void;
    update: (req: Request, res: Response) => void;
    delete: (req: Request, res: Response) => void;
}