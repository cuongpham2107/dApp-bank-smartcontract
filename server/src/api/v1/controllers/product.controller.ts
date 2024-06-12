import { Product } from "@prisma/client";


class ProductController implements IController<Product> {
    index(req: Request, res: Response): Promise<Product[]> {
        // Get all products
        return Promise.resolve([]);
    }
    create(req: Request, res: Response) {
        // Create a new product
    }
    store(req: Request, res: Response) {
        // Store a new product
    }
    show(req: Request, res: Response): Promise<Product> {
        // Get all products
        return Promise.resolve({} as Product);
    }
    edit(req: Request, res: Response) {
        // Edit a product
    }
    update(req: Request, res: Response) {
        // Update a product
    }
    delete(req: Request, res: Response) {
        // Delete a product
    }
}

export default ProductController;